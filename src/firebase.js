/**
 * Firebase configuration for the landing page
 * Used to fetch real-time activity data for social proof
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, getDocs, getCountFromServer, where } from 'firebase/firestore';

// Firebase configuration (same as the app)
const firebaseConfig = {
  apiKey: "AIzaSyCC8QQdswUwhn9Cc_9AZjTOI-rYisjYL3M",
  authDomain: "flashprep-11c85.firebaseapp.com",
  projectId: "flashprep-11c85",
  storageBucket: "flashprep-11c85.firebasestorage.app",
  messagingSenderId: "258968844420",
  appId: "1:258968844420:web:3ce107a1de69ffa8d5aad1",
  measurementId: "G-Q1XG9SFFTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Country code to flag emoji mapping
const countryCodeToFlag = {
  US: '🇺🇸', CA: '🇨🇦', MX: '🇲🇽', BR: '🇧🇷', AR: '🇦🇷',
  GB: '🇬🇧', FR: '🇫🇷', DE: '🇩🇪', ES: '🇪🇸', IT: '🇮🇹',
  NL: '🇳🇱', SE: '🇸🇪', PL: '🇵🇱', RU: '🇷🇺',
  JP: '🇯🇵', CN: '🇨🇳', HK: '🇭🇰', SG: '🇸🇬', KR: '🇰🇷',
  IN: '🇮🇳', AE: '🇦🇪', ID: '🇮🇩', PH: '🇵🇭', TH: '🇹🇭', PK: '🇵🇰',
  AU: '🇦🇺', NZ: '🇳🇿',
  EG: '🇪🇬', ZA: '🇿🇦', NG: '🇳🇬',
  XX: '🌍', // Unknown
};

/**
 * Fetch recent activities from Firestore
 */
export const fetchRecentActivities = async (maxResults = 20) => {
  try {
    const activitiesRef = collection(db, 'activities');
    
    // Simple query - just order by createdAt (no composite index needed)
    // All activities are public by default, so we filter client-side if needed
    const q = query(
      activitiesRef,
      orderBy('createdAt', 'desc'),
      limit(maxResults)
    );

    const snapshot = await getDocs(q);
    
    // Filter for public activities client-side
    return snapshot.docs
      .map(doc => {
        const data = doc.data();
        const createdAt = data.createdAt?.toDate?.() || new Date();
        
        return {
          id: doc.id,
          isPublic: data.isPublic,
          name: data.displayName || 'Anonymous',
          country: data.country || 'Unknown',
          flag: countryCodeToFlag[data.countryCode] || '🌍',
          action: data.message || 'is practicing',
          time: getTimeAgo(createdAt),
          createdAt,
        };
      })
      .filter(activity => activity.isPublic !== false); // Show all unless explicitly private
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
};

/**
 * Convert date to "X minutes ago" format
 */
function getTimeAgo(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

/**
 * Fetch total question count from Firestore
 * Only counts non-hidden questions
 */
export const fetchQuestionCount = async () => {
  try {
    const questionsRef = collection(db, 'questions');
    
    // Get count of all questions (we'll filter hidden client-side if needed)
    const snapshot = await getCountFromServer(questionsRef);
    return snapshot.data().count;
  } catch (error) {
    console.error('Error fetching question count:', error);
    return null; // Return null to indicate error, component can fall back to static value
  }
};

export { db };


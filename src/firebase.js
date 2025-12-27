/**
 * Firebase configuration for the landing page
 * Used to fetch real-time activity data for social proof
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, getDocs, getCountFromServer, where } from 'firebase/firestore';

// Firebase configuration
// Uses environment variables for deployment (Vite uses VITE_ prefix)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID ,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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
 * Security rules require isPublic == true and no userId field
 */
export const fetchRecentActivities = async (maxResults = 20) => {
  try {
    const limitCount = Math.min(maxResults, 50); // Enforce max limit
    const activitiesRef = collection(db, 'activities');
    
    // Try query with where clause first (requires index)
    try {
      const q = query(
        activitiesRef,
        where('isPublic', '==', true),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );

      const snapshot = await getDocs(q);
      
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
        });
    } catch (indexError) {
      // If index doesn't exist, query without where and filter client-side
      // Security rules will still enforce isPublic == true
      if (indexError.code === 'failed-precondition' || indexError.code === 'unavailable') {
        console.warn('Firestore index not found. Using fallback query.');
        
        const fallbackQuery = query(
          activitiesRef,
          orderBy('createdAt', 'desc'),
          limit(limitCount * 2) // Fetch more to account for filtering
        );

        const snapshot = await getDocs(fallbackQuery);
        
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
          .filter(activity => activity.isPublic === true) // Client-side filter
          .slice(0, limitCount);
      }
      throw indexError; // Re-throw if it's a different error
    }
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


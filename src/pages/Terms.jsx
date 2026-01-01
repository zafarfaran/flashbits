import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

function Terms() {
  return (
    <div className="app">
      {/* Background effects */}
      <div className="background-effects">
        <div className="grid-overlay tech-grid"></div>
        <div className="glow glow-1 orb"></div>
        <div className="glow glow-2 orb"></div>
      </div>
      
      <Navbar />
      <div className="terms-page">
      <div className="container">

        <motion.div 
          className="terms-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Terms & <span className="gradient-text">Conditions</span></h1>
          <p className="terms-updated">Updated at: December 25, 2025</p>
        </motion.div>

        <motion.div 
          className="terms-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="terms-intro">
            <p>
              These Terms & Conditions ("Terms") govern your access to and use of the <strong>Flashbits</strong> mobile application and any related services (together, the "Service") provided by <strong>Flashbits</strong> ("Flashbits", "we", "us", "our"). By downloading, installing, accessing, or using the Service, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree, do not use the Service.
            </p>
            <div className="terms-contact-info">
              <p><strong>Contact:</strong> <a href="mailto:support@flashbits.co">support@flashbits.co</a></p>
              <p><strong>Website:</strong> <a href="https://flashbits.co" target="_blank" rel="noopener noreferrer">https://flashbits.co</a></p>
              <p><strong>Country:</strong> United Kingdom</p>
            </div>
          </div>

          <section className="terms-section">
            <h2>1) Definitions</h2>
            <ul>
              <li><strong>App / Service:</strong> The Flashbits application and related services, features, and content we provide.</li>
              <li><strong>Device:</strong> Any internet-connected device used to access the Service.</li>
              <li><strong>You / User:</strong> The person using the Service, or the entity you represent.</li>
              <li><strong>Third-Party Services:</strong> Services or content provided by third parties (e.g., external links, analytics providers, payment platforms).</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>2) Eligibility</h2>
            <p>You must be at least <strong>13 years old</strong> to use the Service. If you are under the age of majority in your location, you may only use the Service with a parent/guardian's permission.</p>
          </section>

          <section className="terms-section">
            <h2>3) License</h2>
            <p>We grant you a <strong>revocable, non-exclusive, non-transferable, limited</strong> license to download, install, and use the App on devices you own or control, strictly in accordance with these Terms.</p>
          </section>

          <section className="terms-section">
            <h2>4) Restrictions</h2>
            <p>You agree that you will not (and will not permit others to):</p>
            <ul>
              <li>sell, rent, lease, sublicense, assign, distribute, host, or otherwise commercially exploit the App or make it available to any third party;</li>
              <li>modify, create derivative works of, decompile, reverse engineer, or attempt to extract the source code of the App, except where permitted by law;</li>
              <li>remove, alter, or obscure any copyright, trademark, or other proprietary notices in the App or Service.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>5) Accounts (if applicable)</h2>
            <p>If the Service includes account features, you are responsible for:</p>
            <ul>
              <li>maintaining the confidentiality of your account credentials; and</li>
              <li>all activity that occurs under your account.</li>
            </ul>
            <p>We may suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section className="terms-section">
            <h2>6) Purchases, Subscriptions, and Refunds (only if applicable)</h2>
            <p>If the App offers in-app purchases or subscriptions:</p>
            <ul>
              <li>Payments are processed by <strong>Apple</strong> (App Store) or <strong>Google</strong> (Google Play), not by Flashbits.</li>
              <li>You can manage or cancel subscriptions through your Apple ID or Google Play subscription settings.</li>
              <li>Refund requests for App Store/Google Play purchases are handled under Apple's/Google's refund policies and processes.</li>
            </ul>
            <p>If Flashbits offers purchases <strong>directly outside</strong> Apple/Google (if any), the applicable pricing and refund terms will be shown at checkout and will comply with applicable law.</p>
          </section>

          <section className="terms-section">
            <h2>7) Suggestions and Feedback</h2>
            <p>If you submit feedback, ideas, or suggestions ("Suggestions"), you agree that:</p>
            <ul>
              <li>Suggestions are provided voluntarily and without expectation of compensation; and</li>
              <li>Flashbits may use, copy, modify, publish, or redistribute Suggestions for any purpose without credit or compensation to you.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>8) Third-Party Services and Links</h2>
            <p>The Service may display, include, or make available Third-Party Services or links. Flashbits does not control and is not responsible for Third-Party Services, including their content, accuracy, availability, or practices. Your use of Third-Party Services is at your own risk and subject to their terms and policies.</p>
          </section>

          <section className="terms-section">
            <h2>9) Updates, Modifications, and Availability</h2>
            <p>We may:</p>
            <ul>
              <li>update the App (patches, bug fixes, upgrades, feature changes);</li>
              <li>modify, suspend, or discontinue the Service (in whole or in part) at any time.</li>
            </ul>
            <p>You agree that we have no obligation to provide any particular update or to maintain any specific feature.</p>
          </section>

          <section className="terms-section">
            <h2>10) Intellectual Property</h2>
            <p>The Service (including its software, design, text, graphics, logos, and other content) is owned by Flashbits or its licensors and is protected by UK and international intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our content except as permitted by these Terms or by law.</p>
          </section>

          <section className="terms-section">
            <h2>11) Copyright Infringement Notice</h2>
            <p>If you believe any content in the Service infringes your copyright, email <a href="mailto:support@flashbits.co">support@flashbits.co</a> with:</p>
            <ol>
              <li>your name and contact details;</li>
              <li>identification of the copyrighted work;</li>
              <li>identification of the allegedly infringing material and where it appears;</li>
              <li>a statement that you have a good-faith belief the use is not authorized; and</li>
              <li>a statement that the information is accurate and you are authorized to act.</li>
            </ol>
          </section>

          <section className="terms-section">
            <h2>12) Privacy</h2>
            <p>Your use of the Service is also governed by our Privacy Policy, available at: <Link to="/privacy">https://flashbits.co/privacy</Link>.</p>
            <p>The App may use technologies such as SDKs or similar tools for functionality, analytics, and crash reporting (where enabled), as described in the Privacy Policy.</p>
          </section>

          <section className="terms-section">
            <h2>13) Disclaimers</h2>
            <p>The Service is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE."</strong> To the maximum extent permitted by law, Flashbits disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            <p>We do not guarantee that the Service will be uninterrupted, error-free, secure, or free of harmful components.</p>
            <p>Some jurisdictions do not allow certain warranty exclusions, so some exclusions may not apply to you.</p>
          </section>

          <section className="terms-section">
            <h2>14) Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>Flashbits will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, data, or goodwill arising from your use of (or inability to use) the Service.</li>
              <li>If liability cannot be excluded, Flashbits' total liability for any claim will be limited to the amount you paid to Flashbits for the Service in the <strong>12 months</strong> before the event giving rise to the claim (if any).</li>
            </ul>
            <p>Nothing in these Terms limits liability where it cannot be limited under applicable law (for example, certain consumer rights).</p>
          </section>

          <section className="terms-section">
            <h2>15) Indemnification</h2>
            <p>You agree to indemnify and hold harmless Flashbits and its officers, employees, and partners from claims, liabilities, damages, and expenses (including reasonable legal fees) arising out of:</p>
            <ul>
              <li>your misuse of the Service;</li>
              <li>your violation of these Terms or applicable law; or</li>
              <li>your infringement of any third-party rights.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>16) Termination</h2>
            <p>These Terms remain in effect until terminated:</p>
            <ul>
              <li>You may terminate by uninstalling the App and ceasing use.</li>
              <li>We may suspend or terminate your access if you violate these Terms, if required by law, or for security/operational reasons.</li>
            </ul>
            <p>Upon termination, the license granted to you ends and you must stop using the Service.</p>
          </section>

          <section className="terms-section">
            <h2>17) Severability</h2>
            <p>If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect.</p>
          </section>

          <section className="terms-section">
            <h2>18) Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will post the updated Terms and revise the "Updated at" date. If changes are material, we may provide additional notice within the Service where appropriate. Continuing to use the Service after changes take effect means you accept the updated Terms.</p>
          </section>

          <section className="terms-section">
            <h2>19) Governing Law and Jurisdiction</h2>
            <p>These Terms are governed by the laws of <strong>England and Wales</strong>. Courts of <strong>England and Wales</strong> will have jurisdiction, except where mandatory consumer protection laws provide otherwise.</p>
          </section>

          <section className="terms-section">
            <h2>20) Dispute Resolution</h2>
            <p>Before filing a claim, you agree to contact us at <a href="mailto:support@flashbits.co">support@flashbits.co</a> and allow us a reasonable opportunity to resolve the dispute.</p>
          </section>

          <section className="terms-section">
            <h2>21) Contact Us</h2>
            <p>If you have questions about these Terms, contact: <a href="mailto:support@flashbits.co">support@flashbits.co</a></p>
          </section>
        </motion.div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Terms


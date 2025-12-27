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

function Privacy() {
  return (
    <div className="app">
      {/* Background effects */}
      <div className="background-effects">
        <div className="grid-overlay tech-grid"></div>
        <div className="glow glow-1 orb"></div>
        <div className="glow glow-2 orb"></div>
      </div>
      
      <Navbar />
      <div className="privacy-page">
      <div className="container">

        <motion.div 
          className="privacy-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Privacy <span className="gradient-text">Policy</span></h1>
          <p className="privacy-updated">Updated at: December 25, 2025</p>
        </motion.div>

        <motion.div 
          className="privacy-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="privacy-intro">
            <p>
              <strong>Flashbits</strong> ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect personal information when you use our mobile application (Flashbits), our website at <a href="https://flashbits.co" target="_blank" rel="noopener noreferrer">https://flashbits.co</a>, and any related services (collectively, the "Service").
            </p>
            <p>
              By accessing or using the Service, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>

          <section className="privacy-section">
            <h2>1) Definitions</h2>
            <ul>
              <li><strong>Personal Data / Personal Information:</strong> Information that identifies or can reasonably be linked to an individual (directly or indirectly).</li>
              <li><strong>Device:</strong> Any internet-connected device used to access the Service.</li>
              <li><strong>Cookies & Similar Technologies:</strong> Technologies that store or access information on your device (e.g., cookies for the website, SDKs, local storage, or similar technologies).</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2) What information we collect</h2>
            <p>We may collect the following categories of information:</p>
            
            <h3>A) Information you provide</h3>
            <ul>
              <li>Name / username</li>
              <li>Email address</li>
              <li>Age or age confirmation (if you provide it)</li>
              <li>Password (stored in an encrypted/hashed form where applicable)</li>
            </ul>

            <h3>B) Information collected automatically</h3>
            <p>Depending on how you use the Service, we may collect:</p>
            <ul>
              <li>Device information (device model, OS version, app version)</li>
              <li>Approximate location (e.g., inferred from IP address for website traffic)</li>
              <li>Usage data (features used, pages/screens viewed)</li>
              <li>Log data (IP address, timestamps)</li>
              <li>Crash and performance diagnostics (to improve stability)</li>
            </ul>

            <h3>C) Information from third parties (only if you choose to connect them)</h3>
            <p>If you use third-party login or integrations (e.g., Google/Apple sign-in or social platforms), we may receive basic account/profile information as permitted by your settings with that provider.</p>
          </section>

          <section className="privacy-section">
            <h2>3) How we use your information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Create and manage accounts (if available)</li>
              <li>Personalize your experience and save preferences</li>
              <li>Provide customer support and respond to requests</li>
              <li>Send service-related messages (e.g., security, account, or policy updates)</li>
              <li>Detect, prevent, and address fraud, abuse, and security issues</li>
              <li>Comply with legal obligations and enforce our Terms</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4) Email communications</h2>
            <p>If you provide your email address, we may use it to:</p>
            <ul>
              <li>send important Service messages (e.g., account notices, security alerts), and</li>
              <li>send optional marketing messages only where permitted by law.</li>
            </ul>
            <p>You can opt out of marketing emails at any time using the unsubscribe link (if included) or by contacting us at <a href="mailto:support@flashbits.co">support@flashbits.co</a>.</p>
          </section>

          <section className="privacy-section">
            <h2>5) Sharing your information</h2>
            <p>We may share information in the following situations:</p>
            
            <h3>A) Service providers (processors)</h3>
            <p>We may share information with trusted vendors who help us operate the Service (e.g., hosting, analytics, crash reporting, email delivery, customer support). They are allowed to use your information only to provide services to us.</p>

            <h3>B) Legal and safety</h3>
            <p>We may disclose information if required by law or if we believe disclosure is necessary to protect rights, safety, and security, or to respond to lawful requests.</p>

            <h3>C) Business transfers</h3>
            <p>If we are involved in a merger, acquisition, financing, reorganization, or sale of assets, information may be transferred as part of that transaction.</p>

            <p><strong>We do not sell your personal information.</strong></p>
            <p>(If this ever changes, we will update this policy and provide required choices where applicable.)</p>
          </section>

          <section className="privacy-section">
            <h2>6) Payments</h2>
            <p>If you purchase subscriptions or in-app items through the App Store or Google Play, Apple or Google processes payments. We do not receive your full payment card details from them.</p>
            <p>If we ever offer payments directly on our website, we will use reputable payment processors and will not store full card numbers on our servers.</p>
          </section>

          <section className="privacy-section">
            <h2>7) Cookies and similar technologies</h2>
            <p>Our website may use cookies, and our app may use similar technologies (such as SDKs) to:</p>
            <ul>
              <li>remember preferences,</li>
              <li>understand usage,</li>
              <li>improve performance and reliability.</li>
            </ul>
            <p>You can control cookies through your browser settings. For mobile apps, you can manage certain permissions and tracking controls through your device settings.</p>
          </section>

          <section className="privacy-section">
            <h2>8) Data retention</h2>
            <p>We keep personal information only as long as necessary to:</p>
            <ul>
              <li>provide the Service,</li>
              <li>meet the purposes described in this policy, and</li>
              <li>comply with legal and regulatory obligations.</li>
            </ul>
            <p>When we no longer need information, we delete it or de-identify it where appropriate.</p>
          </section>

          <section className="privacy-section">
            <h2>9) Security</h2>
            <p>We use reasonable technical and organizational measures to protect information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="privacy-section">
            <h2>10) International transfers</h2>
            <p>We are based in the United Kingdom. Your information may be processed in the UK and other countries where we or our service providers operate. Where required, we use appropriate safeguards for international transfers (for example, contractual protections).</p>
          </section>

          <section className="privacy-section">
            <h2>11) Your rights (UK/EU users)</h2>
            <p>If UK/EU data protection laws apply to you, you may have rights to:</p>
            <ul>
              <li>access your personal data,</li>
              <li>correct it,</li>
              <li>delete it,</li>
              <li>restrict or object to processing,</li>
              <li>request portability,</li>
              <li>withdraw consent (where processing is based on consent).</li>
            </ul>
            <p>To exercise rights, contact <a href="mailto:support@flashbits.co">support@flashbits.co</a>. We may need to verify your identity before fulfilling your request.</p>
            <p>(These transparency requirements are reflected in GDPR/UK GDPR privacy notice rules.)</p>
          </section>

          <section className="privacy-section">
            <h2>12) California disclosures (CalOPPA / CCPA if applicable)</h2>
            
            <h3>CalOPPA (California Online Privacy Protection Act)</h3>
            <p>We disclose what information we collect, how we use it, and how we share it in this policy. CalOPPA also expects an "online tracking / Do Not Track" disclosure.</p>

            <h3>Do Not Track</h3>
            <p>Some browsers offer a "Do Not Track" signal. At this time, our website does not respond to Do Not Track signals in a uniform way because there is no widely adopted standard. We may allow third-party analytics providers to collect information about online activities over time and across different websites when you use our website.</p>

            <h3>CCPA/CPRA (if it applies to our business)</h3>
            <p>California residents may have rights to know, delete, and correct certain personal information, and to opt out of certain data sharing where applicable. Businesses generally respond within 45 days (and can extend in some cases).</p>
            <p>To make a request, contact <a href="mailto:support@flashbits.co">support@flashbits.co</a>.</p>
            <p><em>Note: Whether CCPA/CPRA applies depends on legal thresholds and business activities. If it does not apply to us, we may still honor reasonable privacy requests.</em></p>
          </section>

          <section className="privacy-section">
            <h2>13) Children's privacy</h2>
            <p>The Service is not intended for children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact <a href="mailto:support@flashbits.co">support@flashbits.co</a> and we will take appropriate steps to delete it.</p>
          </section>

          <section className="privacy-section">
            <h2>14) Links to other websites</h2>
            <p>The Service may contain links to third-party sites. We are not responsible for the privacy practices of those sites. Please review their policies before providing information.</p>
          </section>

          <section className="privacy-section">
            <h2>15) Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the updated version and change the "Updated at" date. If changes are material, we may also notify you through the Service.</p>
          </section>

          <section className="privacy-section">
            <h2>16) Contact us</h2>
            <p>If you have questions about this Privacy Policy or your data:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@flashbits.co">support@flashbits.co</a></li>
              <li><strong>Company:</strong> Flashbits</li>
              <li><strong>Address:</strong> Apartment 2203 M50 2HJ</li>
            </ul>
          </section>
        </motion.div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Privacy


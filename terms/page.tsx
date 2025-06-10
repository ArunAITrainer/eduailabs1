export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the eduAIlabs website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
        <h2>2. Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You are responsible for maintaining the confidentiality of your account information.
        </p>
        <h2>3. Intellectual Property</h2>
        <p>
          The content, features, and functionality of our website and services are owned by eduAIlabs and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>
        <h2>4. Limitation of Liability</h2>
        <p>
          eduAIlabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services.
        </p>
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms of Service at any time. It is your responsibility to check these Terms periodically for changes.
        </p>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at arunsharma@eduailabs.com.
        </p>
      </div>
    </div>
  )
}


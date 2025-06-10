import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> <a href="mailto:arunsharma@eduailabs.com" className="text-blue-600 hover:underline">arunsharma@eduailabs.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+919818880849" className="text-blue-600 hover:underline">+91 9818880849</a>
            </p>
            <p>
              <strong>Address:</strong> Chandigarh, India
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


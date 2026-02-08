import Layout from "./Layout"

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          Contact Us 📞
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
           "If you have any questions, feedback, or need support — send us a message." ✅
            </p>

            <div className="space-y-3 text-gray-700">
              <p>📍 Brigunj, Nepal</p>
              <p>📧 support@foodify.com</p>
              <p>📱 +977-9818551042</p>
            </div>
          </div>

         
          <form className="shadow-xl rounded-xl p-6 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-lg p-3"
            />

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </Layout>
  )
}

export default Contact

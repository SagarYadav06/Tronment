import Layout from "./Layout"
const Services = () => {
  return (
    <Layout>
      <div className="h-screen max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Our Services 🍽
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-xl rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">
              🚚 Fast Delivery
            </h2>
            <p className="text-gray-600">
              Quick and reliable food delivery at your doorstep.
            </p>
          </div>

          <div className="shadow-xl rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">
              🏪 Restaurant Listing
            </h2>
            <p className="text-gray-600">
              Discover top restaurants near your location.
            </p>
          </div>

          <div className="shadow-xl rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-3">
              💳 Online Payment
            </h2>
            <p className="text-gray-600">
              Secure and easy digital payment options.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Services

  
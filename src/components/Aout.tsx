import Layout from "./Layout"

const About = () => {
  return (
   <Layout>
     <div className="h-screen ax-w-5xl mx-auto px-6 py-12">
      
      <h1 className="text-4xl font-bold text-center mb-8">
        About Foodify 🍔
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed text-center">
        Foodify ek modern food ordering platform hai jahan aapko best
        restaurants aur delicious meals easily milte hain. Hamara goal hai
        fast delivery, fresh food aur smooth user experience dena.
      </p>

      {/* Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        
        <div className="shadow-lg rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-3">🚀 Fast Delivery</h2>
          <p className="text-gray-600">
            Super fast delivery system jisse aapka order jaldi pahunchta hai.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-3">🍽 Quality Food</h2>
          <p className="text-gray-600">
            Trusted restaurants aur high quality ingredients.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-3">💳 Easy Payment</h2>
          <p className="text-gray-600">
            Multiple payment options — simple aur secure checkout.
          </p>
        </div>

      </div>

    </div>
   </Layout>
  )
}

export default About

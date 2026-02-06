const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-orange-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to Neconic 🍔</h1>
        <p className="mt-4 text-lg">
          Discover the best food near you
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg">
          Order Now
        </button>
      </section>

      {/* Featured Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Popular Dishes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Pizza</h3>
            <p>Cheesy and delicious</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Burger</h3>
            <p>Hot and crispy</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Momos</h3>
            <p>Spicy and tasty</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

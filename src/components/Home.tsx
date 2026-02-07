

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-amber-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg">
          We build modern & scalable web applications
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Fast</h2>
          <p>Optimized performance and clean code.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Responsive</h2>
          <p>Looks great on mobile, tablet & desktop.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Scalable</h2>
          <p>Built to grow with your business.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { icon: '🏘️', title: 'Wide Selection', desc: 'Thousands of properties across cities' },
    { icon: '🔍', title: 'Smart Search', desc: 'Find exactly what you\'re looking for' },
    { icon: '🤝', title: 'Trusted Agents', desc: 'Verified professionals to help you' },
    { icon: '💰', title: 'Best Prices', desc: 'Competitive pricing guaranteed' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect <span className="text-yellow-300">Home</span>
            </h1>
            <p className="text-xl mb-10 text-blue-100">
              Browse thousands of properties for sale and rent. Your dream home is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/properties" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
              >
                Browse Properties
              </Link>
              <Link 
                to="/add-property" 
                className="bg-transparent border-2 border-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition"
              >
                List Property
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose EstateHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 hover:bg-blue-50 rounded-2xl transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-3">500+</div>
              <h3 className="text-xl font-semibold mb-2">Properties Listed</h3>
              <p className="text-gray-600">And growing every day</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-3">50+</div>
              <h3 className="text-xl font-semibold mb-2">Cities Covered</h3>
              <p className="text-gray-600">Nationwide coverage</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-3">100+</div>
              <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
              <p className="text-gray-600">Trusted by many</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Join thousands of happy homeowners who found their perfect property through EstateHub
          </p>
          <Link 
            to="/properties" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-xl font-bold hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
          >
            Start Searching Now →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
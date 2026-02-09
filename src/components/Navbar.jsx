import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
          🏠 EstateHub
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/properties" className="hover:text-blue-200 transition">Properties</Link>
          <Link to="/add-property" className="hover:text-blue-200 transition">List Property</Link>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition font-medium">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
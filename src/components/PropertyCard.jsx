import { Link } from 'react-router-dom';
import { formatPrice } from '../services/api';

const PropertyCard = ({ property }) => {
  const getTypeColor = (type) => {
    return type === 'sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <Link 
      to={`/properties/${property._id}`} 
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {property.images && property.images[0] ? (
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-4xl">🏡</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTypeColor(property.type)}`}>
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">{property.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{property.description}</p>
        </div>

        {/* Price & Details */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            {formatPrice(property.price)}
            {property.type === 'rent' && <span className="text-sm text-gray-500">/month</span>}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <span className="flex items-center mr-4">
              <span className="mr-1">🛏️</span> {property.bedrooms} beds
            </span>
            <span className="flex items-center mr-4">
              <span className="mr-1">🚿</span> {property.bathrooms} baths
            </span>
            <span className="flex items-center">
              <span className="mr-1">📐</span> {property.area} sqft
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-gray-700 text-sm flex items-center">
            <span className="mr-2">📍</span>
            {property.location?.address || property.location?.city || 'Location not specified'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
import { useParams, Link } from "react-router-dom";
import spaces from "../data/spaces.json";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

function SpaceDetailsContent() {
  const { id } = useParams();
  const space = spaces.find(space => space.id === parseInt(id));

  if (!space) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Space not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='animated-mesh-bg'>
      <div className='absolute inset-0 -z+10 pointer-events-none'>
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
        <div className="orb-4"></div>
        <div className="orb-5"></div>
        <div className="orb-6"></div>
      </div>

      <Navbar />

      <div className="relative m-2 sm:m-3 md:m-4 lg:m-5 xl:m-6 mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-50 border-2 border-white/50 rounded-2xl">
        <div key={space.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col sm:flex-row" >
          {/* Image with back button */}
          <div className="relative w-full sm:w-2/5">
            <img src={space.main_image} alt={space.name} className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover" />
            {/* Back button */}
            <Link
              to="/"
              className="absolute top-2 left-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-105"
              aria-label="Back to home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          {/* Text content */}
          <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow sm:w-3/5">
            <div className='flex flex-col sm:flex-row sm:justify-between'>
              <div className="mb-2 sm:mb-0">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide" style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                  ᯓ {space.name}
                </h2>
              </div>
              <div className='sm:text-right'>
                <p className="text-green-600 font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">₱{space.price}</p>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5">{space.location}</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap pb-2 sm:pb-3 md:pb-4">
              <p className="sm:w-1/5 text-xs sm:text-sm md:text-base text-gray-500 font-medium mb-1 sm:mb-0">
                Hours:
              </p>
              <p className="sm:w-4/5 text-xs sm:text-sm md:text-base text-gray-500">
                {space.hours}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap">
              <p className="sm:w-1/5 text-xs sm:text-sm md:text-base text-gray-500 font-medium mb-1 sm:mb-0">
                Time slots:
              </p>
              <div className="sm:w-4/5 text-xs sm:text-sm md:text-base text-gray-500">
                {space.time_slots.join(", ")}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="relative m-2 sm:m-3 md:m-4 lg:m-5 xl:m-6 mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-50">
        <div
          key={space.id}
          className="flex flex-col sm:flex-row transition gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {/* Description and Amenities container */}
          <div className="bg-white sm:w-2/5 md:w-5/12 lg:w-2/5 rounded-2xl shadow-md p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-lg border-2 border-white/50 rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:flex-wrap pb-2 sm:pb-3 md:pb-4 mb-3 sm:mb-4 md:mb-5">
              <p className="w-full sm:w-1/3 md:w-1/4 text-xs sm:text-sm md:text-base text-gray-500 font-medium mb-1 sm:mb-0">Description:</p>
              <p className="w-full sm:w-2/3 md:w-3/4 text-xs sm:text-sm md:text-base text-gray-500">{space.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap">
              <p className="w-full sm:w-1/3 md:w-1/4 text-xs sm:text-sm md:text-base text-gray-500 font-medium mb-1 sm:mb-0">Amenities:</p>
              <div className="w-full sm:w-2/3 md:w-3/4 text-xs sm:text-sm md:text-base text-gray-500">
                {space.amenities.map((amenity, index) => (
                  <p key={index} className="mb-1">ᯓ {amenity}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Text content container */}
          <div className="bg-white rounded-2xl shadow-md p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow sm:w-3/5 md:w-7/12 lg:w-3/5 hover:shadow-lg border-2 border-white/50 rounded-2xl">
            {/* Add your additional content here */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default function SpaceDetails() {
  return (
    <ProtectedRoute>
      <SpaceDetailsContent />
    </ProtectedRoute>
  );
}
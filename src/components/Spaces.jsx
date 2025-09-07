import { Link } from "react-router-dom";
import spaces from "../data/spaces.json";
import { useAuth } from "../context/AuthContext";

export default function Spaces({ searchTerm = "" }) {
  const { isAuthenticated } = useAuth();
  const filteredSpaces = spaces.filter(space => 
    space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    space.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetailsClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      alert("Please log in to view details");
    }
  };

  return (
    <div className="mb-6 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
      {filteredSpaces.map((space) => (
        <div
          key={space.id}
          className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col spaces-border"
        >
          <img
            src={space.main_image}
            alt={space.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <div className='flex justify-between'>
              <div>
                <h2 className="text-lg sm:text-xl md:text-xl font-bold tracking-wide" style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                  ᯓ {space.name}
                </h2>
              </div>
              <div className='text-right'>
                <p className="text-green-600 font-semibold text-base sm:text-lg md:text-xl">₱{space.price}</p>
              </div>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm mb-4">{space.location}</p>

            <div className="flex flex-wrap pb-1">
              <p className="w-full md:w-1/3 text-[10px] sm:text-xs md:text-sm text-gray-500">Hours:</p>
              <p className="w-full md:w-2/3 text-[10px] sm:text-xs md:text-sm text-gray-500">{space.hours}</p>
            </div>

            <div className="flex flex-wrap">
              <p className="w-full md:w-1/3 text-[10px] sm:text-xs md:text-sm text-gray-500">Time Slots:</p>
              <p className="w-full md:w-2/3 text-[10px] sm:text-xs md:text-sm text-gray-500 pb-5">{space.time_slots.join(", ")}</p>
            </div>

            <Link
              to={`/spaces/${space.id}`}
              onClick={handleViewDetailsClick}
              className={`mx-auto mt-auto text-center inline-block px-4 py-2 rounded-lg text-sm sm:text-base md:text-lg login-btn text-xl ${isAuthenticated ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'}`}
              style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
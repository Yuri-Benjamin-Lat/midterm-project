import { useParams, Link } from "react-router-dom";
import spaces from "../data/spaces.json"; // adjust path if needed

export default function SpaceDetails() {
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
    <div className="min-h-screen bg-gray-50">
      

      {/* Header Section */}
      <div className="relative h-64 sm:h-80 md:h-96">
        
        <img
          src={space.main_image}
          alt={space.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold" style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
            ᯓ {space.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Space Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About this Space</h2>
              <p className="text-gray-700 mb-4">{space.description || "A beautiful study space designed for focus and comfort."}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">{space.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Operating Hours</h3>
                  <p className="text-gray-600">{space.hours}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Available Time Slots</h3>
                  <p className="text-gray-600">{space.time_slots.join(", ")}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Price</h3>
                  <p className="text-green-600 font-bold text-xl">₱{space.price}</p>
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {space.amenities?.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                )) || (
                  <p className="text-gray-600">No amenities listed</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking & Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-4">Book this Space</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Select Time Slot</h3>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {space.time_slots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Select Date</h3>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Duration</h3>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4+ hours</option>
                </select>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Price</span>
                  <span className="text-green-600 font-bold">₱{space.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total</span>
                  <span className="text-green-600 font-bold text-xl">₱{space.price}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold text-lg">
                Book Now
              </button>

              <Link
                to="/"
                className="w-full mt-4 text-center block bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200 font-semibold"
              >
                Back to Spaces
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
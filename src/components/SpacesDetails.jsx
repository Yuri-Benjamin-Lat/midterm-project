import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import spaces from "../data/spaces.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useReservations } from "../context/ReservationContext";

export default function SpaceDetailsContent() {
  const { id } = useParams();
  const space = spaces.find(space => space.id === parseInt(id));
  const { isAuthenticated, user } = useAuth();
  const { addReservation } = useReservations();
  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [reservationSuccess, setReservationSuccess] = useState(false);

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

  const handleBooking = (e) => {
    e.preventDefault();
    
    // Check if user is authenticated
    if (!isAuthenticated) {
      alert("Please log in to make a reservation");
      return;
    }
    
    // Show browser confirmation alert
    const isConfirmed = window.confirm(
      `Confirm Reservation:\n\nSpace: ${space.name}\nDate: ${selectedDate}\nTime Slot: ${selectedTimeSlot}\nTotal: ₱${space.price}\n\nClick OK to confirm.`
    );
    
    if (isConfirmed) {
      const reservation = {
        spaceId: space.id,
        spaceName: space.name,
        spaceImage: space.main_image,
        spaceLocation: space.location,
        spacePrice: space.price,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        userId: user.id,
        userName: user.name,
        totalPrice: space.price
      };

      addReservation(reservation);
      setReservationSuccess(true);
      
      // Reset form
      setSelectedDate("");
      setSelectedTimeSlot("");
      
      // Hide success message after 3 seconds
      setTimeout(() => setReservationSuccess(false), 3000);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className='animated-mesh-bg'>
      <div className='absolute inset-0 -z-10 pointer-events-none'>
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
        <div className="orb-4"></div>
        <div className="orb-5"></div>
        <div className="orb-6"></div>
      </div>

      <Navbar />

      {/* Success Notification */}
      {reservationSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          ✅ Reservation confirmed successfully!
        </div>
      )}

      <div className='mt-25'>
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
            <div className="bg-white sm:w-2/5 md:w-5/12 lg:w-2/5 rounded-2xl shadow-md p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-lg border-2 border-white/50">
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

            {/* Reservation Form */}
            <div className="bg-white rounded-2xl shadow-md p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow sm:w-3/5 md:w-7/12 lg:w-3/5 hover:shadow-lg border-2 border-white/50">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                Make a Reservation
              </h3>
              
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    required
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a time slot</option>
                    {space.time_slots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600">
                    <strong>Price:</strong> ₱{space.price}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTimeSlot}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
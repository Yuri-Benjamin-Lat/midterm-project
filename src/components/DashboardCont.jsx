import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useReservations } from "../context/ReservationContext";

export default function DashboardCont() {
    const { isAuthenticated, user } = useAuth();
    const { getUserReservations, cancelReservation } = useReservations();

    // Get reservations for the current user
    const userReservations = user ? getUserReservations(user.id) : [];

    const handleCancelReservation = (reservationId, spaceName, date, timeSlot) => {
        if (window.confirm(`Are you sure you want to cancel your reservation for ${spaceName} on ${date} (${timeSlot})?`)) {
            cancelReservation(reservationId);
        }
    };

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-50 mt-25'>
            <div className='glass-searchbar text-center p-4 sm:p-5 pt-8 sm:pt-12 md:pt-15 pb-8 sm:pb-12 md:pb-15 mt-5 mb-5'>
                <p className='text-2xl sm:text-3xl md:text-4xl leading-tight' style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                    Welcome to your Dashboard, {isAuthenticated ? 'Yuri Lat' : 'Name'}
                </p>
            </div>

            {/* Reservations Section */}
            <div className="glass-searchbar p-4 sm:p-6 md:p-8 mb-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center" style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                    Your Reservations
                </h2>

                {userReservations.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">You don't have any reservations yet.</p>
                        <Link
                            to="/"
                            className="inline-block login-btn px-6 py-2 rounded-md font-bold hover:bg-blue-700 transition-colors"
                            
                        >
                            Browse Study Spaces
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-4 sm:gap-6">
                        {userReservations.map((reservation) => (
                            <div key={reservation.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-2 border-white/50 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    {/* Space Image */}
                                    <div className="sm:w-1/4">
                                        <img
                                            src={reservation.spaceImage}
                                            alt={reservation.spaceName}
                                            className="w-full h-32 sm:h-40 object-cover rounded-xl"
                                        />
                                    </div>

                                    {/* Reservation Details */}
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                                            {reservation.spaceName}
                                        </h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">Location</p>
                                                <p className="text-gray-800">{reservation.spaceLocation}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">Date</p>
                                                <p className="text-gray-800">{reservation.date}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">Time Slot</p>
                                                <p className="text-gray-800">{reservation.timeSlot}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">Price</p>
                                                <p className="text-green-600 font-semibold">₱{reservation.totalPrice}</p>
                                            </div>
                                        </div>

                                        {/* Status and Cancel Button */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <div className="flex items-center">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                    {reservation.status}
                                                </span>
                                            </div>

                                            <button
                                                onClick={() => handleCancelReservation(
                                                    reservation.id,
                                                    reservation.spaceName,
                                                    reservation.date,
                                                    reservation.timeSlot
                                                )}
                                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
                                            >
                                                Cancel Reservation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
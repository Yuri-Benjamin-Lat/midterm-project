import Navbar from "../components/Navbar";
import DashboardCont from "../components/DashboardCont";  
import Footer from "../components/Footer";

export default function Dashboard() {

  return (
    <div className='animated-mesh-bg'>
      <div>
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
        <div className="orb-4"></div>
        <div className="orb-5"></div>
        <div className="orb-6"></div>
      </div>
      <div className='relative'>
        <Navbar />
        <DashboardCont />
        <Footer />
      </div>
    </div>
  );
}
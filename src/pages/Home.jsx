import Navbar from "../components/Navbar";
import Spaces from "../components/Spaces";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

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
        <Searchbar onSearch={handleSearch} />
        <Spaces searchTerm={searchTerm} />
        <Footer />
      </div>
    </div>
  );
}
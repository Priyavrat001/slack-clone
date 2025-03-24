import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [style, setStyle] = useState({
    display: "block",
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  });
  const [announcement, setAnnouncement] = useState({
    display: "block",
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  });

  const handleClose = () => {
    console.log("click")
    setStyle((prev) => ({ ...prev, opacity: 0 }));
    setTimeout(() => {
      setStyle((prev) => ({ ...prev, display: "none" }));
    }, 300);
  };

  const handleAnnouncmentClose = () => {
    console.log("click")
    setAnnouncement((prev) => ({ ...prev, opacity: 0 }));
    setTimeout(() => {
      setAnnouncement((prev) => ({ ...prev, display: "none" }));
    }, 300);
  };

  return (
    <div className="bg-[#F8F3F0] min-h-screen text-black">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center px-6 py-3 bg-white shadow-md md:px-10 lg:px-20">
        <div className="flex items-center gap-2">
          <img
            src="https://logosmarcas.net/wp-content/uploads/2020/11/Slack-Emblema.png"
            alt="Slack Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-lg">Slack</span>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-600 text-sm">
          <li className="hover:text-black cursor-pointer hover:underline">Product</li>
          <li className="hover:text-black cursor-pointer hover:underline">Enterprise</li>
          <li className="hover:text-black cursor-pointer hover:underline">Resources</li>
          <li className="hover:text-black cursor-pointer hover:underline">Pricing</li>
        </ul>

        <div className="flex items-center gap-4">
          <FaSearch className="text-gray-500 hover:text-black cursor-pointer" />
          <button className="px-4 py-2 border border-[#611F69] text-[#611F69] rounded-md text-sm hover:bg-[#611F69] hover:text-white transition cursor-pointer">Sign in</button>
          <button className="px-4 py-2 border border-[#611F69] text-[#611F69] rounded-md text-sm hover:bg-[#611F69] hover:text-white transition cursor-pointer">
            Try for free
          </button>
        </div>
      </nav>

      {/* Announcement Banner */}
      <div className="bg-[#1264A3] text-white text-center py-4 px-2 rounded" style={announcement}>
        <p className="text-sm md:text-base">
          Slack is your digital HQ. Meet the new features keeping teams connected. <br className="block md:hidden" />
          <span className="underline cursor-pointer">Let's go →</span>
        <button
        className="text-white text-lg hover:text-gray-200 transition cursor-pointer ml-4"
        onClick={handleAnnouncmentClose}
      >
        ✖
      </button>
        </p>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center py-12 px-6 md:px-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Slack is where the future works</h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            Transform the way you work with one place for everyone and everything you need to get stuff done.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#611F69] text-white px-6 py-3 rounded-md hover:bg-[#855b8a] cursor-pointer">Try for free</button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-400 cursor-pointer flex items-center gap-2">
            <img 
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" 
          alt="Google Logo" 
          className="w-6 h-6 object-contain"
        />
        Sign up with Google
      </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/website-project_1426-4101.jpg"
            alt="Slack UI Preview"
            className="w-4/5 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4 mt-6">
        {[
          "https://www.maramaexperience.com/wp-content/uploads/2023/09/Fox_Corporation-Logo.wine_.svg",
          "https://download.logo.wine/logo/Lonely_Planet/Lonely_Planet-Logo.wine.png",
          "https://download.logo.wine/logo/Intuit/Intuit-Logo.wine.png",
          "https://companieslogo.com/img/orig/CVNA_BIG-0e1228ee.png?t=1673238139",
          "https://freepngdesign.com/content/uploads/images/p20-21-kiva-5914633389.png",
          "https://www.globalafricanetwork.com/wp-content/uploads/2023/07/DEVAC-HYDROGEN-H-Logo-1068x.jpg"
        ].map((src, index) => (
          <img key={index} src={src} alt="Company Logo" className="h-8" />
        ))}
      </div>

      {/* Call to Action */}
      <div className="relative max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://blog.feedspot.com/wp-content/uploads/2017/08/Educational-Youtube-Channel.jpg"
            alt="Slack UI Preview"
            className="w-4/5 rounded-lg shadow-lg border border-gray-300"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Now is your moment to build a better tomorrow
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            We’ve seen what the future can be. Now it's time to decide what it will be.
          </p>
          <button className="border-2 border-[#4A154B] text-[#36C5F0] px-6 py-3 rounded-md font-medium hover:bg-[#4A154B] hover:text-white transition cursor-pointer">
            Watch Video
          </button>
        </div>
      </div>

      {/* Cookie Banner */}
    <div style={style}>
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md w-80">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition cursor-pointer" onClick={handleClose}>✖</button>
        <p className="text-gray-700 text-sm pr-6">
          This website uses cookies to enhance user experience and analyze traffic.
        </p>
        <button className="bg-purple-700 text-white px-4 py-2 mt-2 w-full rounded-md hover:bg-purple-800 transition cursor-pointer" onClick={handleClose}>
          Accept All Cookies
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
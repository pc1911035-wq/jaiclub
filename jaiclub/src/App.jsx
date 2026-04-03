import React from 'react';
import Seo from './components/Seo.jsx';

function App() {
  // Updated external links with your invitation code
  const loginLink = "https://www.jaiclub00.com/#/register?invitationCode=64362250282";
  const registerLink = "https://www.jaiclub13.com/#/register?invitationCode=64362250282";
  const downloadLink = "https://www.jaiclub00.com/#/register?invitationCode=64362250282";
  const homeLink = "https://apkhunter.vercel.app";

  const AHLogo = ({ className }) => (
    <div className={`${className} bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center rounded-xl shadow-[0_4px_10px_rgba(204,0,0,0.3)] border border-red-500/50`}>
    {/* ADD SEO COMPONENT HERE */}
      <Seo 
        title="Jai Club Login & Download"
        description="Download Jai Club via ApkHunter. Register now to get a free ₹28 bonus. Play fast parity, spin and win, and earn rewards."
        keywords="Jai Club, Jai Club download, ApkHunter, earning games, spin and win"
        url="https://apkhunter.vercel.app"
        image="https://apkhunter.vercel.app/gamelogo.webp" 
      />
      <svg 
        className="w-[65%] h-[65%] text-white drop-shadow-sm" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 5.4-.2l3.4-3.4a5.05 5.05 0 0 0 0-7.1 5.05 5.05 0 0 0-7.1 0l-3.4 3.4a5.4 5.4 0 0 0-.2 5.4z" />
        <path d="m15.4 6.5 2.1 2.1" />
        <path d="M9 16v5" />
        <path d="M16 9h5" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col overflow-x-hidden">
      
      {/* Top Header Actions */}
      <header className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <a 
          href={loginLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#cc0000] text-white px-8 py-2 font-bold hover:bg-red-800 transition rounded-sm inline-block"
        >
          Login
        </a>
        <a 
          href={registerLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#cc0000] text-white px-8 py-2 font-bold hover:bg-red-800 transition rounded-sm inline-block"
        >
          Register
        </a>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-4 py-6 w-full">
        
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
           {/* Link to Vercel App */}
           <a href={homeLink} className="flex items-center gap-3 group">
             <AHLogo className="w-11 h-11 transform group-hover:-translate-y-1 transition-transform duration-300" />
             <h1 className="text-2xl text-[#112a46] font-semibold tracking-tight group-hover:text-[#cc0000] transition-colors">ApkHunter Jai Club Login</h1>
           </a>
           <a href="#blog" className="text-gray-500 hover:text-gray-700 font-medium">Blog</a>
        </div>

        <h2 className="text-3xl font-bold text-[#2d3748] mb-12">Jai Club Game</h2>

        <div className="flex flex-col items-center justify-center mb-12">
          
          {/* Image Tag */}
          <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-4 shadow-[0_10px_20px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-300 border-4 border-white outline outline-2 outline-gray-200 overflow-hidden bg-white">
            <img 
              src="gamelogo.webp" 
              alt="Jai Club Logo" 
              width="128"
              height="128"
              fetchpriority="high"
              className="w-full h-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = 'gamelogo.jpeg' }}
            />
          </div>
          <h3 className="text-4xl font-black text-[#cc0000] mb-8 italic tracking-tight uppercase drop-shadow-sm">Jai Club</h3>

          {/* Buttons with Animation */}
          <div className="flex flex-col gap-5 w-full max-w-[320px] mt-2">
            <a 
              href={downloadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1a365d] text-white text-center py-3.5 font-bold hover:bg-[#0f2038] transition shadow-lg rounded-sm text-lg relative group"
            >
              JaiClub Game Download
            </a>
            
            <a 
              href={registerLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#cc0000] text-white text-center py-3.5 font-bold hover:bg-red-800 transition shadow-lg rounded-sm text-lg relative group"
            >
              Register On Jai Club
              
              {/* Animated Free ₹28 Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-900 text-xs font-black px-3 py-1 rounded-full shadow-md animate-bounce transform rotate-12 border-2 border-white">
                 Register and Get <br/> 🎁 Free ₹28
              </div>
            </a>
          </div>
        </div>

        {/* Data Table */}
        <div className="border border-gray-300 rounded-sm overflow-hidden mb-10 max-w-4xl mx-auto shadow-sm">
          <table className="w-full text-left border-collapse text-sm md:text-base">
            <tbody>
              <tr className="border-b border-gray-300 bg-gray-50/50">
                <td className="p-4 border-r border-gray-300 text-gray-700 w-1/3 font-semibold">Website Name</td>
                <td className="p-4 text-blue-800 hover:underline font-medium"><a href={homeLink}>ApkHunter</a></td>
              </tr>
              {/* Added Invitation Code Row */}
              <tr className="border-b border-gray-300">
                <td className="p-4 border-r border-gray-300 text-gray-700 font-semibold">Invitation Code</td>
                <td className="p-4 font-bold text-[#cc0000] text-lg tracking-wider">64362250282</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50/50">
                <td className="p-4 border-r border-gray-300 text-gray-700 font-semibold">Average Rating</td>
                <td className="p-4">⭐ 4.5/5 | Vote count: 40,185+</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 border-r border-gray-300 text-gray-700 font-semibold">Top Games</td>
                <td className="p-4">Fast Parity, Andar Bahar, Spin and Win</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-4 border-r border-gray-300 text-gray-700 font-semibold">Withdrawal Time</td>
                <td className="p-4">Usually 5 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-gray-700 space-y-6 leading-relaxed">
          <p className="text-lg">
            <strong>JaiClub</strong> is a fun place with lots of quick games. Some games are just 30 seconds long, and others last about two and a half minutes. If you don’t like waiting, you can try <strong>Fast Parity</strong>, which is quick and easy. You can also play <strong>Andar Bahar</strong>. There are five different kinds of games where you can try to win money. These games include guessing colors, rolling dice, finding mines, a circle game, and spinning a wheel.
          </p>
          <p className="text-lg">
            People enjoy playing <strong>Spin and Win</strong> because it’s a game where luck decides what happens, and that makes it exciting. Also, with JaiClub, if you want to get your money back, it shows up in your bank account really fast—usually in just <strong>five minutes</strong> after you press the withdraw button.
          </p>

          <div className="bg-[#f8fafc] border-l-4 border-[#1a365d] p-6 rounded-r-lg my-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a365d] mb-4">How to Download & Play</h3>
            <ul className="space-y-3 list-disc list-inside marker:text-[#cc0000]">
              <li><strong>Visit:</strong> Search for <strong className="text-gray-900">ApkHunter</strong> in your browser to find the official download page.</li>
              <li><strong>Click:</strong> The "JaiClub Game Download" button located above.</li>
              <li><strong>Install:</strong> The app (APK file) safely on your Android device.</li>
              <li><strong>Login:</strong> Create your account and start your winning journey.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-[#1a365d] mt-10">Is JaiClub Safe & Legal?</h3>
          <p className="text-lg">
            Yes, JaiClub is considered a safe and secure online gaming platform for users above 18 years of age. It operates similarly to other real-money gaming sites, with user-friendly withdrawal processes and clear terms.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <h4 className="font-bold text-gray-700 mb-2 uppercase tracking-wider text-xs">Disclaimer</h4>
            <p>
              ApkHunter is an affiliate partner of an online prediction game and is not the official platform. We do not guarantee outcomes. Users participate at their own risk and discretion. Please read the official website’s terms before engaging in any activities.
            </p>
          </div>
          
          <div className="text-center mt-12 pb-8 text-2xl font-black text-[#1a365d]">
            Thank you for choosing ApkHunter!
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href={homeLink} className="flex items-center gap-2 group">
            <AHLogo className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
            <span className="font-bold text-gray-800 text-lg group-hover:text-[#cc0000] transition-colors">ApkHunter</span>
          </a>
          
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#privacy" className="hover:text-[#cc0000] transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#cc0000] transition">Terms of Service</a>
            <a href="#contact" className="hover:text-[#cc0000] transition">Contact Us</a>
          </div>

          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ApkHunter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
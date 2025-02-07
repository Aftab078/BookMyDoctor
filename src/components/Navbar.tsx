// import React, { useState } from 'react';
// import { Menu, X, Phone } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = ['Home', 'Services', 'Blog', 'Contact Us'];

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <h1 className="text-xl font-bold text-gray-800">Dr. Mustaq Khan</h1>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//             <a href="tel:9797688925" className="flex items-center text-blue-600">
//               <Phone className="w-4 h-4 mr-2" />
//               9797688925
//             </a>
//           </div>

//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="block px-3 py-2 text-gray-700 hover:text-blue-600"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//             <a
//               href="tel:9797688925"
//               className="block px-3 py-2 text-blue-600 font-medium"
//             >
//               <Phone className="w-4 h-4 inline mr-2" />
//               9797688925
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#hero' },
    { name: 'Services', link: '#services' },
    { name: 'Contact Us', link: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Dr. Mustaq Khan</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="tel:9797688925" className="flex items-center text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              9797688925
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:9797688925"
              className="block px-3 py-2 text-blue-600 font-medium"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              9797688925
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

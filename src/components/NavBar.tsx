import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoIosColorPalette } from "react-icons/io";

// Menu items
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const menu = [
  { label: "Home Appliances", link: "/appliancess_home" },
  { label: "Audio & video", link: "/video_and_audio" },
  { label: "Refrigerator", link: "/refrigerator" },
  { label: "New arrivals", link: "/new-arrivals" },
  { label: "Todays deal", link: "/todays-deal" },
  { label: "Gift cards", link: "/gift-cards" },
];

const hoverlink = [
  { label: "Air conditioner", link: "/conditioner_air" },
  { label: "Kitchen appliances", link: "/appliances_kitchen" },
  { label: "PC & laptop", link: "/laptop_and_pc" },
  { label: "Gadgets", link: "/gadgets" },
  { label: "Smart home", link: "/home_smart" },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

const NavBar: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("#0472F0");
  const [cart, setCart] = useState<boolean>(false);
  const [bg, setBg] = useState<boolean>(false);
  const [allproduct, setAllProduct] = useState<boolean>(false);

  // Dummy cart state for example
  const [state, setState] = useState<CartItem[]>([
    { id: 1, name: "Sample Product", price: 1000, img: "/images/sample.jpg" },
  ]);

  const subtotal = state.reduce((acc, item) => acc + item.price, 0);

  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

  return (
    <nav className="relative">
      {/* First Navbar */}
      <div
        className={`md:flex hidden border-b border-gray-600 items-center justify-between px-10`}
        style={{ backgroundColor: bgColor, height: "86px" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>

        {/* Search Bar and Cart */}
        <div className="items-center gap-8 hidden relative md:flex">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center relative gap-10">
            <button
              className="transition duration-300 text-white"
              onClick={() => setCart(!cart)}
            >
              <BsCart4 className="text-2xl" />
            </button>
            <span className="h-5 w-5 absolute -top-4 left-3 cursor-pointer rounded-full flex items-center justify-center bg-white text-[#0472F0] font-bold">
              {state.length}
            </span>
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <div
        className="relative px-10 border-t border-gray-600 text-white h-16.25 md:flex hidden items-center justify-between"
        style={{ backgroundColor: bgColor }}
      >
        {/* Menu Items */}
        <div className="flex items-center gap-10">
          {menu.map((item, index) => (
            <Link key={index} to={item.link} className="font-bold">
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <FaUserFriends className="text-2xl" />
            <Link
              to="/login"
              className="text-white font-semibold text-[18px]"
            >
              Log In
            </Link>
            /
            <Link
              to="/account/create"
              className="text-white font-semibold text-[18px]"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Hover Link Items */}
        {allproduct && (
          <div
            className="absolute top-16 z-999 p-5"
            style={{ backgroundColor: bgColor, width: "20vw", height: "20vw" }}
          >
            {hoverlink.map((item, index) => (
              <ul key={index}>
                <Link to={item.link} className="text-2xl">
                  {item.label}
                </Link>
              </ul>
            ))}
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#110d0da8] z-9999999 transition-opacity duration-500 ${
          cart ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`h-full w-[30vw] fixed top-0 right-0 bg-white transition-transform duration-500 ${
            cart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="fixed top-0 right-0 h-full w-100 bg-white shadow-lg z-50">
            {/* Header */}
            <div className="md:ml-0 ml-12 flex justify-between items-center border-b md:px-5 py-4">
              <h2 className="text-lg font-bold">Shopping Cart</h2>
              <button
                onClick={() => setCart(!cart)}
                className="text-gray-400 md:mr-0 ml-12 hover:text-black text-2xl font-semibold transform transition-transform duration-300 hover:rotate-180"
              >
                <RxCross2 className="md:text-3xl text-4xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="px-5 py-4 h-[60vh] overflow-y-auto">
              {state.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4 mb-4"
                >
                  <div className="h-16 w-16 bg-gray-200 rounded-md">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="flex-1 px-4">
                    <p className="text-sm font-semibold">{item.name}</p>
                  </div>
                  <div className="text-gray-600 font-bold">Rs{item.price}</div>
                </div>
              ))}
            </div>

            {/* Subtotal */}
            <div className="px-5 mt-16 py-4 border-t">
              {state.length > 0 && (
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm font-semibold">Subtotal:</p>
                  <p className="text-lg font-bold">Rs{subtotal.toFixed(2)}</p>
                </div>
              )}

              {state.length > 0 ? (
                <div className="space-y-3">
                  <Link to="/view-carts">
                    <button className="w-full px-4 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700">
                      View Cart
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="text-center text-gray-500 text-sm">
                  Your cart is empty. Add items to get started!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Theme Color Selector */}
      <div className="flex items-center justify-between p-5 h-12 w-36 top-[21.6vw] fixed right-0 z-999 bg-white border cursor-pointer hover:bg-blue-500 group transition-all">
        <button onClick={() => setBg(!bg)}>
          <IoIosColorPalette className="text-xl text-blue-500 group-hover:text-white" />
          <p className="font-semibold text-gray-500 group-hover:text-white">Customize</p>
        </button>
      </div>

      {bg && (
        <div className="h-screen md:w-[30vw] w-[81vw] top-0 fixed right-0 z-999 bg-white">
          <div className="border shadow-blue-500 shadow-[0_4px_8px_rgba(0,0,0,0.3)] h-24 flex items-center justify-between bg-white p-5 w-full">
            <h2 className="text-gray-500 font-semibold text-[20px]">Electronic Store</h2>
            <button
              onClick={() => setBg(!bg)}
              className="text-gray-400 md:mr-0 ml-12 hover:text-black text-2xl font-semibold transform transition-transform duration-300 hover:rotate-180"
            >
              <RxCross2 className="md:text-3xl text-4xl" />
            </button>
          </div>

          <div className="p-4 flex flex-col gap-5">
            <p className="font-bold text-[15px] mb-3">Select Theme Color</p>
            {["#0472F0", "#212121", "#FE42B2", "#FF5100", "#EE4D49", "#000000", "#0ba0db"].map(
              (color) => (
                <div
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className="w-full h-16 md:h-[4vw] cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

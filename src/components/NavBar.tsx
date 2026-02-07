import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  return (
    <div className="h-32 bg-amber-500 flex items-center px-8">
      <ul className="flex gap-6 text-lg font-semibold">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="hover:text-white transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;

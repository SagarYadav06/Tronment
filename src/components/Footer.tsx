import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Support", path: "/support" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6">
      <ul className="flex justify-center gap-6">
        {footerLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="hover:text-amber-400 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-center text-sm mt-4 text-gray-400">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

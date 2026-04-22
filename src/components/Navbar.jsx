import { LuGithub } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-8 flex items-center justify-between">
      <span className="text-xl font-extrabold">Movies CRD</span>
      <a
        href="#"
        className="bg-black p-2.5 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
      >
        <LuGithub className="size-6" />
      </a>
    </nav>
  );
};

export default Navbar;

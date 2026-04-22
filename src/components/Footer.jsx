

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 py-6 text-center">
        <p className="text-sm">
          Tu catálogo de cine personal.
        </p>
        <p className="my-2">&copy; {new Date().getFullYear()} | Desarrollado por <a href="#" >Emi</a></p>
        <p className="text-xs text-slate-500">Realizado con React & Tailwind CSS v4</p>
      </footer>
    </>
  );
};

export default Footer;

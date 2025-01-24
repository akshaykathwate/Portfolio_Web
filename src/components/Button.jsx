
const Button = ({ text, onClick, link }) => {
  return (
    <a
      href={link || "#"}
      onClick={onClick}
      className="relative inline-block px-6 py-3 font-semibold text-black bg-transparent border-black border-2 dark:text-white rounded-lg overflow-hidden group"
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-black scale-x-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-left"></span>
      <span className="relative group-hover:text-white">{text}</span>
    </a>
  );
};

export default Button;

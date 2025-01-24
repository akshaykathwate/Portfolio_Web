import "./underline.css";

const Underline = ({ text, link }) => {
  return (
    <a href={link || "#"} className="text-underline py-1">
      {text}
    </a>
  );
};

export default Underline;

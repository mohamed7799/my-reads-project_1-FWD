const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-green-500 ${className}`}>
      {children}
    </button>
  );
};

export default Button;

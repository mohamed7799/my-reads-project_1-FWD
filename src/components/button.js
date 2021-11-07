const Button = ({ children, className }) => {
  return <button className={`bg-green-500 ${className}`}>{children}</button>;
};

export default Button;

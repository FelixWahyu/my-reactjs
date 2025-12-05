export const Button = (props) => {
  const { type = "button", children, onClick } = props;

  return (
    <>
      <button type={type} onClick={onClick} className="px-4 py-2 w-full cursor-pointer bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700">
        {children}
      </button>
    </>
  );
};

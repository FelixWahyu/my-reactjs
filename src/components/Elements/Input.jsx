export const Input = (props) => {
  const { Type, Id, Name, Placeholder } = props;

  return (
    <>
      <input
        type={Type}
        id={Id}
        name={Name}
        placeholder={Placeholder}
        className="bg-gray-100 mt-1 pl-10 pr-3 py-2 w-full border border-gray-300 shadow-sm rounded-lg outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-500 transition-all"
      />
    </>
  );
};

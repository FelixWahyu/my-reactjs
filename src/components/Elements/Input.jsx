export const Input = (props) => {
  const { type, id, name, placeholder, value, onChange } = props;

  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-100 mt-1 pl-10 pr-3 py-2 w-full border border-gray-300 shadow-sm rounded-lg outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-500 transition-all"
      />
    </>
  );
};

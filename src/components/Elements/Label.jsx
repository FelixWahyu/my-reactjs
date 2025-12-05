export const Label = (props) => {
  const { htmlfor, children } = props;

  return (
    <>
      <label htmlFor={htmlfor} className="text-sm font-medium text-gray-700">
        {children}
      </label>
    </>
  );
};

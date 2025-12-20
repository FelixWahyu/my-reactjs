const UserCard = (props) => {
  const { name, job, email } = props;

  return (
    <div className="p-4 border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold">{name}</h2>
      <h2 className="text-lg font-light">{job}</h2>
      <h2 className="text-sm font-medium">{email}</h2>
    </div>
  );
};

export default UserCard;

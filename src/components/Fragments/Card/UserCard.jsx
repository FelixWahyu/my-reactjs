import { X } from "lucide-react";

const UserCard = (props) => {
  const { name, job, email, onClick } = props;

  return (
    <div className="relative p-4 border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold">{name}</h2>
      <h2 className="text-lg font-light">{job}</h2>
      <h2 className="text-sm font-medium">{email}</h2>
      <button onClick={onClick} className="text-red-500 font-semibold absolute cursor-pointer right-2 top-2 hover:text-red-600">
        <X className="w-5 h-5"></X>
      </button>
    </div>
  );
};

export default UserCard;

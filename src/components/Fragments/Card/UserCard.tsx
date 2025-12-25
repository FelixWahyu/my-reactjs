import { X } from "lucide-react";
import { type MouseEventHandler } from "react";

type CardProps = {
  name: string;
  job: string;
  email: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const UserCard = (props: CardProps) => {
  const { name, job, email, onClick, className = "" } = props;

  return (
    <div className="relative p-4 border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold">{name}</h2>
      <h2 className="text-lg font-light">{job}</h2>
      <h2 className="text-sm font-medium">{email}</h2>
      <button onClick={onClick} className={"text-red-500 font-semibold absolute cursor-pointer right-2 top-2 hover:text-red-600 " + className}>
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UserCard;

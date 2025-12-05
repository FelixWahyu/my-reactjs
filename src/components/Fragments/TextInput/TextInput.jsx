import { Input } from "../../Elements/Input";
import { Label } from "../../Elements/Label";

export const TextInput = (props) => {
  const { nama, type, title, icon: Icon, placeholder } = props;

  return (
    <>
      <div className="space-y-2">
        <Label htmlfor={nama}>{title}</Label>
        <div className="relative">
          {Icon && <Icon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />}
          <Input Type={type} Id={nama} Name={nama} Placeholder={placeholder}></Input>
        </div>
      </div>
    </>
  );
};

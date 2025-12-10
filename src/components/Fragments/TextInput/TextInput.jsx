import { Input } from "../../Elements/Input";
import { Label } from "../../Elements/Label";

export const TextInput = (props) => {
  const { nama, type, title, icon: Icon, placeholder, value, onChange } = props;

  return (
    <>
      <div className="space-y-2">
        <Label htmlfor={nama}>{title}</Label>
        <div className="relative">
          {Icon && <Icon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />}
          <Input type={type} id={nama} name={nama} value={value} onChange={onChange} placeholder={placeholder}></Input>
        </div>
      </div>
    </>
  );
};

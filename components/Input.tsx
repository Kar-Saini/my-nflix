import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  type?: string;
  label: string;
}
const Input: React.FC<InputProps> = ({ id, onChange, value, type, label }) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="block rounded-md px-6 pb-1 pt-6 w-full text-white text-md appearance-none focus:outline-none focus:ring-0 peer bg-neutral-700 "
        placeholder=" "
      />
      <label
        className="absolute text-md text-zinc-100 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-visible:-translate-y-3 "
        htmlFor="email"
      >
        {label}
      </label>
    </div>
  );
};
export default Input;

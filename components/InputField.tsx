import React, { FC } from "react";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
  value?: string | number | undefined;
  isRequired?: boolean;
};

const InputField: FC<Props> = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  value,
  isRequired,
}) => {
  return (
    <section className="form-group relative">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired}
      />
    </section>
  );
};

export default InputField;

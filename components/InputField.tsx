import React, { FC, useEffect, useMemo } from "react";
import { Movie } from "../types/MovieTypes";

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
    <section className="form-group">
      {label && <label htmlFor="title">{label}</label>}
      <input
        id="title"
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

import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({
  title,
  fields,
  onSubmit,
  buttonText = "Submit",
  values = {},
  onChange,
  header,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {header && <div className="p-4 text-center font-semibold">{header}</div>}

      <div className="flex flex-1 justify-center items-center">
        <form onSubmit={onSubmit} className="form-card w-full max-w-md">
          {title && <h2 className="form-title">{title}</h2>}

          {fields.map((field, index) => (
            <Input
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChange={onChange}
            />
          ))}

          <Button type="submit">{buttonText}</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;

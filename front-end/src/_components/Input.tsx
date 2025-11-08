import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
}

const Input = ({ label, error, id, className, ...props }: InputProps) => {
  const inputId = id
  const base =
    "w-full px-3 py-2 rounded-md border text-sm transition-colors placeholder-gray-400";
  const normal = "bg-white border-gray-300 text-gray-900";
  //   const focus =
  //     "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300";
  //   const disabled = "disabled:opacity-50 disabled:cursor-not-allowed";
  //   const errorStyle = error ? "border-red-400 focus:ring-red-300" : "";
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={inputId} className="font-medium">
        {label}
      </label>
      <input
        id={inputId}
        placeholder={props.placeholder}
        className={`${base} ${normal}`}
        onChange={props.onChange}
      />
      {error && typeof error === "string" && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;

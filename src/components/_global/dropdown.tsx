import React from "react";

interface DropdownProps {
  options: string[];
  default?: string;
}

export default function Dropdown(props: DropdownProps) {
  return (
    <select
      id="countries"
      className="block w-24 rounded-lg border border-white bg-gray-50 p-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    >
      {props.options.map((option) => (
        <option key={option}> {option}</option>
      ))}
    </select>
  );
}

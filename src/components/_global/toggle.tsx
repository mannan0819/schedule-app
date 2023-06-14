interface ToggleProps {
  label: string;
}

export function Toggle({ label }: ToggleProps) {
  return (
    // <label className="relative inline-flex items-center cursor-pointer">
    //     <input type="checkbox" value="" className="sr-only peer" />
    //     <div className="w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-700"></div>
    //     <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">{label}</span>
    // </label>
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" value="" className="peer sr-only" />
      <div className="peer h-6 w-11 rounded-full bg-white after:absolute after:left-[2px] after:top-[5.2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-white dark:bg-slate-600 dark:peer-focus:ring-black"></div>
      <span className="ml-2 text-sm font-medium text-white dark:text-white">
        {label}
      </span>
    </label>
  );
}

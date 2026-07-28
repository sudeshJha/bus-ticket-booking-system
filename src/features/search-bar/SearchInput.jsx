import React from "react";
import { LuMapPin } from "react-icons/lu";
import Icon from "../../components/util/Icon";
import { useDarkMode } from "../../context/ThemeContext";
import { format } from "date-fns";

const SearchInput = ({
  children,
  heading,
  placeholder,
  desc,
  type,
  value,
  setValue,
}) => {
  const { isDarkMode } = useDarkMode();
  const scheme = isDarkMode ? "scheme-dark" : "scheme-light";

  return (
    <div className={`flex items-center gap-4 px-8 py-4 rounded-xl w-[20vw] `}>
      <div className="flex items-center justify-center w-12 h-12 rounded-xl mr-6">
        {children}
      </div>

      <div className="flex flex-col flex-1">
        <label
          className={
            "text-lg font-semibold uppercase tracking-wider text-text-secondary"
          }
        >
          {heading}
        </label>

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={type === "date" ? format(new Date(), "yyyy-MM-dd") : ""}
          className={`text-[2.2rem] font-semibold text-text-primary placeholder:text-text-secondary/70  outline-none border-b border-transparent  p-0 overflow-hidden w-full focus:border-b focus:border-primary ${scheme} 
      `}
        />

        <p className="mt-1 text-[1.2rem] text-gray-500 tracking-tight">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SearchInput;

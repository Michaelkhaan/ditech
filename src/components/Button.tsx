import react from "react";

interface Props {
  type: string;
  title: string;
  className: string;
}

function Button({ type, title, className }: Props) {
  return (
    <div className="w-[200px]">
      <button
        className={`border-2 border-[#00fbf4] px-10 py-3 text-[#00fbf4] text-xl font-medium whitespace-nowrap hover:border-none hover:text-black hover:bg-white hover:scale-[0.8] transition-all duration-75 ${className}`}
        type="button"
      >
        {title}
      </button>
    </div>
  );
}

export default Button;

const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`mx-2 group inline-flex items-center px-2 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap uppercase ${
      isActive
        ? "border-black focus:outline-none focus:text-black focus:border-black"
        : "border-transparent text-gray-400 hover:border-gray-300 focus:text-gray-400 focus:border-gray-400"
    }`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default TabSelector;

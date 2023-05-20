const CategoriesTitle = ({ isOpen, toggle }) => {
  return (
    <div className="flex justify-between">
      <button
        className="text-white flex justify-between w-full items-center"
        onClick={toggle}
        type="button"
      >
        <h2 className="text-small md:text-base text-black uppercase font-bold">
          Categorías
        </h2>
        <img
          src="/icons/arrow.svg"
          alt="arrow icon"
          className={
            isOpen ? "h-3 text-neutral-500 rotate-180" : "h-3 text-neutral-500"
          }
        />
      </button>
    </div>
  );
};

export default CategoriesTitle;

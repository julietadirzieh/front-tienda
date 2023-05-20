const Cards = ({
  icon,
  title,
  subtitle,
  description,
  description1,
  description2,
  description3,
  className,
}) => {
  return (
    <div className="bg-gray-100 rounded-xl my-4 mx-auto p-6 shadow-xl w-5/6 lg:w-full">
      <div
        className={`${className} bg-white shadow-md rounded-xl p-4 flex flex-col text-center align-middle items-center my-auto overflow-hidden break-words`}
      >
        <div className="my-auto">
          {icon && <img src={icon} alt="icon" className="h-20 w-20 mx-auto" />}
          <h2 className="uppercase text-2xl font-bold my-2 underline text-red">
            {title}
          </h2>
          <h3 className="text-lg leading-6">{subtitle}</h3>
          {description && (
            <p className="text-sm pr-1 leading-6">{description}</p>
          )}
          {description1 && (
            <p className="text-sm pr-1 leading-6">{description1}</p>
          )}
          {description2 && (
            <p className="text-sm pr-1 leading-6">{description2}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;

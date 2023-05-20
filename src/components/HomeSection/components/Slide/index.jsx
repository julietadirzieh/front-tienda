const Slide = ({ src }) => {
  return (
    <div className="md:h-64 h-48 w-full">
      <img src={src} alt="slide image" className="object-cover w-full h-full" />
    </div>
  );
};

export default Slide;

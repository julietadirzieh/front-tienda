import { useMemo } from "react";
import { Fade } from "react-slideshow-image";
import { useAllPhotosQuery } from "../../../../state/apis/banner";
import Slide from "../Slide";

const Carousel = () => {
  const properties = useMemo(
    () => ({
      prevArrow: (
        <button
          type="button"
          className="text-2xl pl-4 bg-transparent border-0 text-white"
        >
          ←
        </button>
      ),
      nextArrow: (
        <button
          type="button"
          className="text-2xl pr-4 bg-transparent border-0 text-white"
        >
          →
        </button>
      ),
    }),
    []
  );
  const { data: allPhotos } = useAllPhotosQuery();

  return (
    <div className="md:p-12 ">
      <div className="shadow-xl md:mt-0">
        <Fade {...properties} duration="2000">
          {allPhotos?.mainBanner?.map((data, index) => {
            return <Slide key={index} src={data} />;
          })}
        </Fade>
      </div>
    </div>
  );
};

export default Carousel;

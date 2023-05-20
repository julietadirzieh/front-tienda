import { useEffect } from "react";
import { useMediaModal } from "../../hooks/useMediaModal";

import MediaModal from "../MediaModal/MediaModal";
import Modal from "../Modal/Modal";

const ProductDetailsMedia = ({ productById, selectedVariant }) => {
  const { selectedMedia, onClickMedia, handleCloseModal, modalOpen } =
    useMediaModal();

  const productLogic = selectedVariant ? selectedVariant?.product : productById;

  const imgCover = () => {
    if (productLogic?.images?.[0]) {
      return productLogic?.images?.[0];
    } else if (!productLogic?.images?.[0] && !productById?.images?.[0]) {
      return "/images/default-img.webp";
    }
    return productById?.images?.[0];
  };

  const variantImages = selectedVariant?.product?.images || [];

  const productImages = productById?.images || [];
  const images = productLogic?.images || productById?.images || [];
  const videos = productById?.videos || [];

  const displayedMedia =
    variantImages.length > 1
      ? [imgCover(), ...variantImages.slice(1, 3), ...videos]
      : [imgCover(), ...productImages.slice(1, 3), ...videos];

  /*   const displayedMedia = [imgCover(), ...images.slice(1, 3), ...videos];
   */
  const handlePrevClick = () => {
    const currentIndex = displayedMedia.findIndex(
      (media) => media === selectedMedia
    );
    let newIndex = currentIndex - 1;

    if (newIndex === -1) {
      newIndex = displayedMedia.length - 1;
    }

    const previousMedia = displayedMedia[newIndex];
    if (previousMedia) {
      onClickMedia(previousMedia);
    }
  };

  const handleNextClick = () => {
    const currentIndex = displayedMedia.findIndex(
      (media) => media === selectedMedia
    );
    let newIndex = currentIndex + 1;

    if (newIndex === displayedMedia.length) {
      newIndex = 0;
    }

    const nextMedia = displayedMedia[newIndex];
    if (nextMedia) {
      onClickMedia(nextMedia);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNextClick();
      } else if (event.key === "ArrowLeft") {
        handlePrevClick();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMedia]);

  const coverValidation =
    imgCover() !== "/images/default-img.webp"
      ? () => onClickMedia(imgCover())
      : undefined;

  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-1 items-center lg:px-12">
        <img
          src={imgCover()}
          onClick={coverValidation}
          alt="product"
          className={`block aspect-[1/1] col-span-3 lg:col-1 bg-gray-100 p-1 md:p-2 w-250px md:w-400px h-250px md:h-400px rounded-xl border-none mx-auto lg:mb-4 object-fit cursor-pointer ${
            images?.length <= 1 && videos?.length === 0
              ? "mx-auto text-center col-span-4"
              : ""
          }`}
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 rounded-md mx-auto">
          {displayedMedia?.length >= 1 &&
            displayedMedia?.slice(1).map((media, index) => {
              if (videos?.includes(media)) {
                return (
                  <video
                    key={index}
                    className="block aspect-[1/1] bg-gray-100 p-1 md:p-2 object-cover w-60px h-60px md:w-100px md:h-100px lg:w-100px lg:h-100px rounded-lg mb-2 mx-auto cursor-pointer"
                    onClick={() => onClickMedia(media)}
                    alt="video"
                  >
                    <source src={media} type="video/mp4" />
                  </video>
                );
              } else {
                return (
                  <img
                    key={index}
                    className="block aspect-[1/1] bg-gray-100 p-1 md:p-2 object-cover w-60px h-60px md:w-100px md:h-100px lg:w-100px lg:h-100px rounded-lg mb-2 mx-auto cursor-pointer"
                    src={media}
                    onClick={() => onClickMedia(media)}
                    alt="product"
                  />
                );
              }
            })}
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <MediaModal
          selectedMedia={selectedMedia}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          handleCloseModal={handleCloseModal}
          displayedMedia={displayedMedia}
        />
      </Modal>
    </>
  );
};

export default ProductDetailsMedia;

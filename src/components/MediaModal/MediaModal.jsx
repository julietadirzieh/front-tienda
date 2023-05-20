import { useEffect } from "react";

const MediaModal = ({
  selectedMedia,
  handlePrevClick,
  handleNextClick,
  handleCloseModal,
  displayedMedia,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePrevMedia = (event) => {
    event.stopPropagation();
    handlePrevClick();
  };

  const handleNextMedia = (event) => {
    event.stopPropagation();
    handleNextClick();
  };

  const currentIndex = displayedMedia.findIndex(
    (media) => media === selectedMedia
  );
  const hasPreviousMedia = handlePrevClick && currentIndex > 0;
  const hasNextMedia =
    handleNextClick && currentIndex < displayedMedia.length - 1;

  return (
    <div className="relative h-full">
      <button
        type="button"
        className="absolute top-10 right-10 transform -translate-y-full translate-x-full bg-bordo opacity-70 rounded-full w-8 h-8 flex justify-center items-center text-black text-xl hover:opacity-100 transition-opacity"
        onClick={handleCloseModal}
      >
        X
      </button>
      {hasPreviousMedia && (
        <button
          type="button"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black opacity-70 rounded-full w-8 h-8 flex justify-center items-center text-white text-xl hover:opacity-100 transition-opacity"
          onClick={handlePrevMedia}
        >
          &#8249;
        </button>
      )}
      {selectedMedia && (
        <>
          {selectedMedia.includes(".mp4") ? (
            <video
              autoPlay
              className="w-full h-full mx-auto rounded-xl"
              alt="preview"
              width={150}
              height={100}
            >
              <source src={selectedMedia} />
            </video>
          ) : (
            <img
              src={selectedMedia}
              alt="preview"
              className="w-full h-full mx-auto rounded-xl"
              width={150}
              height={100}
            />
          )}
        </>
      )}
      {hasNextMedia && (
        <button
          type="button"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black opacity-70 rounded-full w-8 h-8 flex justify-center items-center text-white text-xl hover:opacity-100 transition-opacity"
          onClick={handleNextMedia}
        >
          &#8250;
        </button>
      )}
    </div>
  );
};

export default MediaModal;

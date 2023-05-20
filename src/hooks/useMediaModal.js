import { useState } from "react";

export const useMediaModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const onClickMedia = (media) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
    setModalOpen(false);
  };


  return {
    selectedMedia,
    onClickMedia,
    handleCloseModal,
    modalOpen
  };
};

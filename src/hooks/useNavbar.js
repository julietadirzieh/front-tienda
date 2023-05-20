import { useState } from "react";

export const useNavbar = () => {
    const [isOpen, setIsopen] = useState(false);
    const openNavbar = () => {
        setIsopen(true);
    };
    const onClose = () => {
        setIsopen(false);
    };
    const toggleNavbar = () => {
        setIsopen(!isOpen);
    };
    return {
        isOpen,
        openNavbar,
        onClose,
        toggleNavbar,
    };
};

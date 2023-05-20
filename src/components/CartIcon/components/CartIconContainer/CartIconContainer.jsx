import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartList from "../../../CartList/CartList";

const CartIconContainer = ({ children }) => {
  const navigate = useNavigate();
  const [isCartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);
  const enterTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const handleClick = () => {
    navigate("/carrito");
    setCartOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeoutRef.current);
    enterTimeoutRef.current = setTimeout(() => {
      setCartOpen(true);
    }, 300); // Delay de 300ms antes de abrir el menú desplegable
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setCartOpen(false);
    }, 300); // Delay de 300ms antes de cerrar el menú desplegable
  };

  useEffect(() => {
    return () => {
      clearTimeout(enterTimeoutRef.current);
      clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button type="button" onClick={handleClick}>
        {children}
      </button>
      {isCartOpen && (
        <div ref={cartRef}>
          <CartList />
        </div>
      )}
    </div>
  );
};

export default CartIconContainer;

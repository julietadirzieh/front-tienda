import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserProfileLinks from "../UserProfileLinks/UserProfileLinks";
import { useSelector } from "react-redux";

const UserIconContainer = ({ children }) => {
  const navigate = useNavigate();
  const [isUserOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);
  const enterTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const user = useSelector((state) => state.auth.user);

  const handleClick = () => {
    navigate("/perfil");
    setUserOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeoutRef.current);
    enterTimeoutRef.current = setTimeout(() => {
      setUserOpen(true);
    }, 300); // Delay de 300ms antes de abrir el menú desplegable
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setUserOpen(false);
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
      {isUserOpen && (
        <div
          ref={userRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <UserProfileLinks userApproved={user} />
        </div>
      )}
    </div>
  );
};

export default UserIconContainer;

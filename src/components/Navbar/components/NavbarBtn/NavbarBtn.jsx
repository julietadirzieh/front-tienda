import UserIcon from "../../../UserIcon";
import CartIcon from "../../../CartIcon";

const NavbarBtn = () => {
  return (
    <div className="flex flex-row md:justify-end w-full items-center text-center mx-4">
      <UserIcon />
      <CartIcon />
    </div>
  );
};

export default NavbarBtn;

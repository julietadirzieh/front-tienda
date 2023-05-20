import UserIconContainer from "./components/UserIconContainer";

const UserIcon = () => {
  return (
    <UserIconContainer>
      <img
        src="/icons/user.svg"
        alt="cart"
        className="w-40px md:w-70px mt-0 mx-auto md:mx-0 text-white hover:text-red my-auto pr-2 pb-0 relative"
        width={150}
        height={150}
      />
    </UserIconContainer>
  );
};

export default UserIcon;

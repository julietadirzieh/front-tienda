const CounterIcon = ({ quantity }) => {
  return (
    <div className="absolute w-4 h-4 bg-red bottom-0 right-0 rounded-full flex items-center justify-center">
      <p className="text-white font-bold text-xs">{quantity}</p>
    </div>
  );
};

export default CounterIcon;

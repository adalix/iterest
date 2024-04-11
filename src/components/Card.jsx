const Card = ({src, name}) => {
  return (
    <div className="box mb-4">
      <img src={src} className="h-auto w-full rounded cursor-pointer" alt={name} />
    </div>
  );
};

export default Card;

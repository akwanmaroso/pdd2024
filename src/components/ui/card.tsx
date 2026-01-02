type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="mx-auto flex min-h-[600px] max-w-6xl flex-col items-center justify-center px-5 py-10 md:min-h-[700px]">
      {children}
    </div>
  );
};

export default Card;

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border shadow-lg shadow-black  border- rounded-full p-3 flex items-center justify-center bg-pink-500 text-blue-200 hover:text-pink-600 hover:bg-blue-200 hover:scale-120 cursor-pointer" > 
      <a href={link} 
      target="_blank"
      className="cursor-pointer ">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;

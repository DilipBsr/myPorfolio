const AboutMeImage = () => {
  return (
    <div className="rounded-2xl">
        <img
          src="../images/about-me.png"
          alt="About Me Image"
          className="h-full w-auto p-5 object-cover "
        />
      
      <div className="h-[400px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;

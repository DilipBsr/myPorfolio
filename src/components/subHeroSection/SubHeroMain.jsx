import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const SubHeroMain = () => {
  return (
    <>
    <div className="w-full border-y border-light-200 text-light-200 flex justify-around uppercase xl:text-3xl md:text-2xl sm:text-2xl  py-8 md:flex-row items-center gap-4 outfit-regular sm:flex hidden">
        <p>Adaptable</p>
        <p>Problem Solver</p>
        <p >Team Player</p>
    </div>
     <div className="w-full border-y border-gray-200 text-light-200 flex text-center uppercase py-8 outfit-regular sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1}  loop={true}
        speed={800}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnVisibilityChange: true
          }}
          modules={[Autoplay]}>
          <SwiperSlide><p>Fast Learner</p></SwiperSlide>
          <SwiperSlide><p>Problem Solver</p></SwiperSlide>
          <SwiperSlide><p>Team Player</p></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SubHeroMain;

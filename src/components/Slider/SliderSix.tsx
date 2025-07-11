import Image from "next/image";
import Link from "next/link";
import "swiper/css/bundle";

const SliderSix = () => {
  return (
    <>
      <div className="slider-block style-six">
        <div className="slider-main">
          <div className="slider-item slider-first">
            <div className="bg-img">
              <Image
                src={"/images/slider/bg-main.png"}
                width={4000}
                height={3000}
                alt="bgslider"
                priority={true}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container">
              <div className="text-content">
                <div className="heading2">
                  <div className="relative overflow-hidden">
                    <span className="block text-white relative overflow-hidden">
                      Global Sustainability{" "}
                    </span>
                    <span className="block text-white absolute top-0 left-0 w-full h-full">
                      Global Sustainability{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <span className="block text-white relative overflow-hidden">
                      Innovation Competition
                    </span>
                    <span className="block text-white absolute top-0 left-0 w-full h-full">
                      Innovation Competition
                    </span>
                  </div>
                </div>
                <div className="body2 md:mt-6 mt-4 text-white xl:w-1/2 sm:w-2/3 w-full">{`Prominent platform dedicated to fostering and recognizing innovators who are at the forefront of creating impactful solutions for sustainability.`}</div>
                <div className="button-block md:mt-7 mt-5">
                  <Link
                    className="button-main bg-orange text-white hover:bg-white hover:text-black rounded-full"
                    href="https://registration.citainovasi.com"
                    target="_blank"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSix;

/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicator={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src="/images/banner1.jpg" alt="banner1" />
        </div>

        <div>
          <img src="/images/banner2.jpg" alt="banner2" />
        </div>

        <div>
          <img src="/images/banner3.jpg" alt="banner3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

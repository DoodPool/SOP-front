import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export function LogoCarousel() {

    return (
        <div className='swiper-container'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                autoplay={{
                    delay: 2500,
                }}
                loop={true}
                modules={[Mousewheel, Pagination, Autoplay]}
                className="mySwiper"
            >
                {/* <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/en/7/71/Monster_Hunter_logo.png" alt="" /></SwiperSlide> */}
                {/* <SwiperSlide><img src="https://static.wikia.nocookie.net/monsterhunter/images/a/a5/Logo-MHF1.png" alt="" /></SwiperSlide> */}
                {/* <SwiperSlide><img src="https://static.wikia.nocookie.net/monsterhunter/images/2/29/Logo-MHF2.png" alt="" /></SwiperSlide> */}
                <SwiperSlide><img src="../src/assets/img/MHW.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="../src/assets/img/MHWIB.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.monsterhunter.com/wilds/assets/img/mainVisual/all.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

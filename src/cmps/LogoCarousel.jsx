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
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091102/SOP-Moms/Logos/k3bo3zums9x5xn2gjbrt.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091099/SOP-Moms/Logos/cgsasqkguzmzdo5pef8e.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091100/SOP-Moms/Logos/aeekgdcy5kxhaxlarjoa.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091101/SOP-Moms/Logos/ofrwazu7tlpmvyznyrro.png" alt="" /></SwiperSlide> 
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091101/SOP-Moms/Logos/wdaz1hpjmksbcbtdhedl.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091099/SOP-Moms/Logos/kirrzzhsrhiqq9ma7tug.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091100/SOP-Moms/Logos/wy5bg18e3uv2zppjsoci.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091101/SOP-Moms/Logos/ngg7nmri6jnwwrqthxaj.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091103/SOP-Moms/Logos/u7o6hxmoh6a0dzbdkw0w.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091102/SOP-Moms/Logos/e4kli317srnx4ni6l1e5.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091101/SOP-Moms/Logos/hq0tipes2qm40h56r0en.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091099/SOP-Moms/Logos/jej6subfjq3kdvvfptv6.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091103/SOP-Moms/Logos/a2ivtcumhgvwpzmy9hxp.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740091098/SOP-Moms/Logos/rxdxsrkko24gpetnmtpt.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

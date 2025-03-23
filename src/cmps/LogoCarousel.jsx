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
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764297/Logos/jphvlikj7yhbo8uovjkb.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764296/Logos/cmg1et9op4goweak3syr.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764298/Logos/xv6lm67kvdhrg8ry2lop.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764295/Logos/vj9jxn9plscatad8pgb4.png" alt="" /></SwiperSlide> 
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764296/Logos/xqp8ikvuilfpmfb79tby.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764294/Logos/pog99r9wqclroz8scqj4.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764296/Logos/hckeegmuv5lbzk3mdm5k.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764297/Logos/rscpon8vtb82cyet3to4.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764298/Logos/poiniskyzdoq5fq8ie1a.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764297/Logos/nl6jl4aqqdihanzcioxq.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764297/Logos/s6k601mqyxyfygsov9we.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764295/Logos/dmjtz7m6qbryc7qk4txx.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764298/Logos/yoeqff5zbxdafnpqsdbx.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764294/Logos/yqzm7i0vl3xfnyph7ycy.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

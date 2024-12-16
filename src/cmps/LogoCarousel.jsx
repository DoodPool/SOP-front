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
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734296931/MH-sop/Logos/sn7ziqmaxxnxxjmqec51.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734296934/MH-sop/Logos/gh4nfffoowohnrlswmmn.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734296978/MH-sop/Logos/luaafqfpwjtzpbj7zxet.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734296982/MH-sop/Logos/h24sfro5i5h8ptfsoxwr.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297361/MH-sop/Logos/luer1ztwrtthmooi1tgp.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297791/MH-sop/Logos/ekxd01ocgi6gcutjxjpa.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='light-shadow' src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297919/MH-sop/Logos/nqdqh8ewgg6joonymbsq.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297921/MH-sop/Logos/ohicttdfj6ajrk8dsgmi.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297928/MH-sop/Logos/ts40arwt0libxrmh2asp.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297932/MH-sop/Logos/s3hzczjpe3u61grircwy.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297933/MH-sop/Logos/rphst5ncwvmsfcksmfly.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297935/MH-sop/Logos/iwic0jo120w0blryrcoa.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297936/MH-sop/Logos/uemsydvswxhv4reftavl.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1734297938/MH-sop/Logos/cmoxfkaoo54smhsuhmqg.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

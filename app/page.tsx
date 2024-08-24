'use client';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import routes from "@/routes";
import hero from "@/components/img/homepage-section11.png";
import packages from "@/data/packages";
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay, Pagination } from "swiper/modules"
import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SwiperContainer from "@/components/SwiperContainer";


export default function Home() {

  return <>
    <Header />
    <main className={`${styles.main} mt-5`}>
      <section className="w-100 d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-0 my-5 ">
        <div className="p-7vw col-md-7">
          <h1>Earn over <span className="text-secondary">$500</span>Monthly</h1>
          <h2>
         <div className="text-secondary"> LEARN AND EARN </div>
          <div>BECOME OUR LANGUAGE AMBASSADOR</div>
          </h2>
          <p>Our online education platform is a fully functional learning place consisting of virtual class,e-library,testing/assessment modus and others.It is an interactive medium where students can engage the teachers just from the comfort of their homes.</p>
        </div>
        <div className={`w-100 ${styles.hero}`}>
          <Image className="w-100" src={hero} alt="hero" />
        </div>
      </section>

      <section className="p-7vw d-md-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center">AMBASSADOR PACKAGES</h2>
        <p className="text-md-center col-md-9 col-lg-7">Our approach to teaching is unique and our teachers are extremely highly rated. We are affordable, simple, effective and very intensive </p>
        <div>
          <Swiper 
          autoHeight={true}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={styles.mySwiper}>
          {
            packages.map((item, index) => <SwiperSlide key={index}>
              <div className="card px-2 py-3">
                <div className="card-body">
                  <Image className="mb-3" src={item.thumbsnail} alt="img" width={50} height={50} />
                  <h5 className="card-title">{item.title}</h5>
                  <div className="card-text d-flex align-items-center gap-3 mb-4">
                    {item.subtle}
                  </div>
                  <div>
                    <Link href={item.link} className="text-decoration-none">
                    <span className="text-secondary">Learn More</span>
                    <FontAwesomeIcon className="ms-2" icon={ faArrowRight} /></Link>
                  </div>
                </div>
              </div>
              </SwiperSlide>)
}
              <SwiperContainer/>
            
            </Swiper>
        
        </div>
      </section>
      </main>
<Footer />
      </>
  
}

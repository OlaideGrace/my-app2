'use client';
import Image from "next/image";
import routes from "@/routes";
import Link from "next/link";
import { useEffect } from "react";
import mdHero from "@/components/img/homepage-section1.png";
import xsHero from "@/components/img/homepage-section11.png";
import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import 'swiper/scss';
import 'swiper/scss/pagination';
import SwiperContainer from "@/components/SwiperContainer";
import AmbassadorContainer from "@/components/AmbassadorContainer";
import Testimonials from "@/components/Testimonials";
import Testify from "@/components/Testify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return <>
    <Header />
    <main className={`${styles.main} mt-5`}>
      <section className="w-100 d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-0 my-5" >
        <div className="p-7vw col-md-7">
          <h1>Earn over <span className="text-secondary">$500</span> Monthly</h1>
          <h2>
            <div className="text-secondary">LEARN AND EARN</div>
            <div>BECOME OUR LANGUAGE AMBASSADOR</div>
          </h2>
          <p>Our online education platform is a fully functional learning place consisting of virtual class,e-library,testing/assessment modus and others.It is an interactive medium where students can engage the teachers just from the comfort of their homes.</p>
        </div>
        <div className={`w-100 ${styles.hero} h-100`}>
          <Image className="w-100 d-none d-md-block" src={mdHero} alt="hero" />
          <Image className="w-100 d-block d-md-none" src={xsHero} alt="hero"/>
        </div>
      </section>
      <section className="mb-5 w-100 p-7vw d-md-flex flex-column justify-content-center align-items-center" >
        <h2 className="text-center">AMBASSADOR PACKAGES</h2>
        <p className="text-md-center col-md-9 col-lg-7">Our approach to teaching is unique and our teachers are extremely highly rated. We are affordable, simple, effective and very intensive </p>
        <div className="w-100">
          <SwiperContainer/>
        </div>
        </section>
        <section className="mb-5 w-100 p-7vw d-md-flex flex-column justify-content-center align-items-center" >
        <h1 className="text-center">SUBSCRPTION PLAN AND BENEFITS</h1>
        <div>
          <AmbassadorContainer/>
        </div>
      </section>
      <section>
      <div className={`${styles.testimonials} w-100 p-4 p-sm-5`}>
        <Testimonials />
      </div> 
      <div className={`${styles.testify} w-100 p-4 p-sm-5 text-center`}>
        <Testify />
      </div>
      <div className="d-md-flex w-100 p-4 py-5 p-sm-5 text-center justify-content-around align-content-center">
        <div>
          <p className="h3"><b>Ready to start a journey with us?</b></p>
        </div>
        <div>
          <Link href={routes.auth.signup} className="btn bg-secondary p-2 shadow">
            Apply Online <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
          </Link>
        </div>
      </div>
      </section>
    </main>
    <Footer />
  </>
}



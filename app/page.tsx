'use client';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import routes from "@/routes";
import hero from "@/components/img/homepage-section11.png";
import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";

export default function Home() {

  return <>
    <Header />
    <main className={styles.main}>
      <section className="w-100 d-flex flex-column flex-lg-row gap-3 ">
        <div className="p-7vw">
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

      </main>

      <Footer />
      </>
  
}

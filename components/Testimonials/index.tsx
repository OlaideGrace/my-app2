import styles from "./testimonial.module.scss";
import routes from "@/routes";
import Link from "next/link";
import Image from "next/image";
import avatarOne from "@/components/img/avatar/img11.png";
import avatarTwo from "@/components/img/avatar/img12.png";
import avatarThree from "@/components/img/avatar/img13.png";
import avatarFour from "@/components/img/avatar/img14.png";
import avatarFive from "@/components/img/avatar/img15.png";

export default function Testimonials() {
    const topAvatars = [
        {src: avatarOne, alt: "first avatar", title: "I can take care of your pitch", width: 70, height: 70, largeSrc: avatarOne, largeWidth: 300, largeHeight: 110, largeClass: styles.avatarOne},
        {src: avatarTwo, alt: "second avatar", title: "I can help marketing strategy", width: 70, height: 70, largeSrc: avatarTwo, largeWidth: 300, largeHeight: 110, largeClass: styles.avatarTwo},
    ];
    
    const bottomAvatars = [
        {src: avatarThree, alt: "third avatar", title: "I can design you website", width: 70, height: 70, largeSrc: avatarThree, largeWidth: 300, largeHeight: 110, largeClass: styles.avatarThree},
        {src: avatarFour, alt: "fourth avatar", title: "I will define the profile of your users", width: 70, height: 70, largeSrc: avatarFour, largeWidth: 300, largeHeight: 110, largeClass: styles.avatarFour},
        {src: avatarFive, alt: "fifth avatar", title: "I can prototype your app", width: 70, height: 70, largeSrc: avatarFive, largeWidth: 300, largeHeight: 110, largeClass: styles.avatarFive},
    ];
    
    return (
        <>
            <section className={`p-4 p-sm-5 py-5`}>
                <div className={`${styles.topAvatar} d-flex justify-content-between px-lg-5`}>
                    {topAvatars.map(avatar => (
                        <div key={avatar.alt}>
                            <Image src={avatar.src} alt={avatar.alt} title={avatar.title} className="d-block d-lg-none" width={avatar.width} height={avatar.height}/>
                            <Image src={avatar.largeSrc} alt={avatar.alt} title={avatar.title} className={`${avatar.largeClass} d-none d-lg-block`} width={avatar.largeWidth} height={avatar.largeHeight}/>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="text-center m-1 m-sm-2 m-md-5 p-1 p-sm-2 p-md-5">
                        <h3 className="mb-4"><b>Doubting? Hear from others</b></h3>
                        <p className="mb-5">Do you require some help for your project: Conception workshop,<br/>prototyping, marketing strategy, landing page, UX/UI?</p>
                        <Link href={routes.auth.signup} className="btn btn-primary px-5 py-3"> Register Now</Link>
                    </div>
                </div>
                <div className={`${styles.bottomAvatar} d-flex justify-content-between`}>
                    {bottomAvatars.map(avatar => (
                        <div key={avatar.title}>
                            <Image src={avatar.src} alt={avatar.alt} title={avatar.title} className="d-block d-lg-none" width={avatar.width} height={avatar.height}/>
                            <Image src={avatar.largeSrc} alt={avatar.alt} title={avatar.title} className={`${avatar.largeClass} d-none d-lg-block`} width={avatar.largeWidth} height={avatar.largeHeight}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
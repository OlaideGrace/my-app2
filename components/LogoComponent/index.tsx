'use client';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import logo from "@/components/img/logo.png";
import logoWhite from "@/components/img/logo-white.png";
=======
import logo from "@/img/logo.png";
import logoWhite from "@/img/logo-white.png";
>>>>>>> e605e18f4ea02b762c26f08010104fe2720cad7f
import Image from "next/image";

const LogoComponent = ({ className }: { className?: string }) => {
    const [logoUrl, setLogoUrl] = useState(logoWhite);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateLogo = () => {
            if (darkModeMediaQuery.matches) {
                setLogoUrl(logoWhite);
            } else {
                setLogoUrl(logo);
            }
        };

        updateLogo(); // Set initial logo based on current preference
        darkModeMediaQuery.addEventListener('change', updateLogo); // Listen for changes

        return () => {
            darkModeMediaQuery.removeEventListener('change', updateLogo); // Cleanup listener on unmount
        };
    }, []);

    return <Image src={logoUrl} alt="logo" width={120} height={45} className={className} />;
};

<<<<<<< HEAD
export default LogoComponent;
=======
export default LogoComponent;
>>>>>>> e605e18f4ea02b762c26f08010104fe2720cad7f

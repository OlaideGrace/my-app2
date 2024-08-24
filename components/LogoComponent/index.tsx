'use client';
import { useEffect, useState } from 'react';
import logo from "@/components/img/logo.png";
import logoWhite from "@/components/img/logo-white.png";
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

export default LogoComponent;
'use client';
import { useEffect, useState } from 'react';
import reset from "@/img/password/reset.svg";
import resetWhite from "@/img/password/resetWhite.svg";
import Image from "next/image";

const ResetIcon = ({ className }:{className: string}) => {
    const [ResetUrl, setResetUrl] = useState(reset);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateReset = () => {
            if (darkModeMediaQuery.matches) {
                setResetUrl(resetWhite);
            } else {
                setResetUrl(reset);
            }
        };

        updateReset(); // Set initial Reset based on current preference
        darkModeMediaQuery.addEventListener('change', updateReset); // Listen for changes

        return () => {
            darkModeMediaQuery.removeEventListener('change', updateReset); // Cleanup listener on unmount
        };
    }, []);

    return <Image src={ResetUrl} alt="Reset" width={120} height={70}  className={className} />;
};

export default ResetIcon;

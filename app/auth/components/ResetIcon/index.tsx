'use client';
import { useEffect, useState } from 'react';
import change from "@/img/password/change.svg";
import changeWhite from "@/img/password/changeWhite.svg";
import Image from "next/image";

const ChangeIcon = ({ className }:{ className?: string }) => {
    const [ChangeUrl, setChangeUrl] = useState(change);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateChange = () => {
            if (darkModeMediaQuery.matches) {
                setChangeUrl(changeWhite);
            } else {
                setChangeUrl(change);
            }
        };

        updateChange(); // Set initial Change based on current preference
        darkModeMediaQuery.addEventListener('change', updateChange); // Listen for changes

        return () => {
            darkModeMediaQuery.removeEventListener('change', updateChange); // Cleanup listener on unmount
        };
    }, []);

    return <Image src={ChangeUrl} alt="Change" width={120} height={70}  className={className} />;
};

export default ChangeIcon;
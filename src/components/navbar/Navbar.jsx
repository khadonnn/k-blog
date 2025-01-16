"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemToggle from "../themToggle/ThemToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { motion } from "motion/react";
const Navbar = () => {
    const [showContainer, setShowContainer] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = useCallback(() => {
        if (window.scrollY > lastScrollY) {
            setShowContainer(false);
        } else {
            setShowContainer(true);
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);
    // console.log(lastScrollY);
    useEffect(() => {
        // Lắng nghe sự kiện cuộn
        window.addEventListener("scroll", handleScroll);

        // Dọn dẹp sự kiện khi component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    return (
        <div
            className={`${styles.container} ${
                !showContainer ? styles.hidden : ""
            }`}
        >
            <div className={styles.social}>
                <Image src='/facebook.png' width={24} height={24} alt='' />
                <Image src='/instagram.png' width={24} height={24} alt='' />
                <Image src='/twitter.png' width={24} height={24} alt='' />
                <Image src='/youtube.png' width={24} height={24} alt='' />
            </div>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={styles.logo}
            >
                K-BLOG
            </motion.div>
            <div className={styles.links}>
                <ThemToggle />
                <Link href='/' className={styles.link}>
                    Homepage
                </Link>
                <Link href='/' className={styles.link}>
                    Contact
                </Link>
                <Link href='/' className={styles.link}>
                    About
                </Link>
                <AuthLinks />
            </div>
        </div>
    );
};

export default Navbar;

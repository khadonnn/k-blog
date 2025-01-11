"use client";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemToggle from "../themToggle/ThemToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { motion } from "motion/react";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src='/facebook.png' width={24} height={24} alt='' />
                <Image src='/instagram.png' width={24} height={24} alt='' />
                <Image src='/tiktok.png' width={24} height={24} alt='' />
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

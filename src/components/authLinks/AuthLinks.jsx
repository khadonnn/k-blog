"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { signOut, useSession } from "next-auth/react";
const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const { status } = useSession();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren", //
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };
    return (
        <>
            {status === "unauthenticated" ? (
                <Link href='/login' className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    {" "}
                    <Link href='/write' className={styles.link}>
                        Write
                    </Link>
                    <span className={styles.link} onClick={signOut}>
                        Logout
                    </span>
                </>
            )}
            {/* <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div> */}
            <BurgerMenu open={open} setOpen={setOpen} />
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        variants={containerVariants}
                        className={styles.responsiveMenu}
                    >
                        <motion.div variants={itemVariants}>
                            <Link href='/'>Homepage</Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href='/about'>About</Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href='/contact'>Contact</Link>
                        </motion.div>
                        {status === "notauthenticated" ? (
                            <motion.div variants={itemVariants}>
                                <Link href='/login'>Login</Link>
                            </motion.div>
                        ) : (
                            <>
                                <motion.div variants={itemVariants}>
                                    <Link href='/write'>Write</Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <span className='link'>Logout</span>
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AuthLinks;

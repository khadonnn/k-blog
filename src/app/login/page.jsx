"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { motion } from "framer-motion";
const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={styles.socialButton}
                    // onClick={() => signIn("google")}
                >
                    Sign in with Google
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={styles.socialButton}
                >
                    Sign in with Github
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={styles.socialButton}
                >
                    Sign in with Facebook
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;

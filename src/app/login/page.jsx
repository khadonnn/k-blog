"use client";
import React, { useEffect } from "react";
import styles from "./loginPage.module.css";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
    const { status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/"); // Chuyển hướng sau khi xác thực
        }
    }, [status, router]);
    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={styles.socialButton}
                    onClick={() => signIn("google")}
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

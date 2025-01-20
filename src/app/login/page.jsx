"use client";
import React, { useEffect } from "react";
import styles from "./loginPage.module.css";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
    const router = useRouter();
    const { status } = useSession();
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/"); // Chuyển hướng đến trang chủ khi đã đăng nhập
        } else if (status === "unauthenticated") {
            router.push("/login"); // Chuyển hướng đến trang đăng nhập khi chưa xác thực
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

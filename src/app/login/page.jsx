"use client";
import React, { useEffect } from "react";
import styles from "./loginPage.module.css";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
    const router = useRouter();
    const { status } = useSession();

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }
    if (status === "authenticated") {
        router.push("/");
        return null; // Chuyển hướng sau khi xác thực
    }

    //add
    if (status === "unauthenticated") {
        router.push("/auth/login"); // Chuyển hướng đến trang login
        return null; // Tránh render thêm nội dung
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

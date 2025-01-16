"use client";
import Image from "next/image";
import styles from "./themToggle.module.css";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
const ThemToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);
    // console.log(theme);
    return (
        <motion.div
            className={styles.container}
            onClick={toggle}
            style={{
                backgroundColor: theme === "dark" ? "white" : "#0f172a",
            }}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.8,
            }}
        >
            {/* Icon Moon */}
            <motion.div
                initial={{ opacity: theme === "dark" ? 0 : 1 }}
                animate={{ opacity: theme === "dark" ? 0 : 1 }}
                transition={{ duration: 0.2 }}
            >
                <Image
                    src='/moon.png'
                    width={18}
                    height={18}
                    alt='Moon Icon'
                    style={{ marginTop: "5px", marginLeft: "1px" }}
                />
            </motion.div>

            {/* Ball */}
            <motion.div
                className={styles.ball}
                initial={{ x: theme === "dark" ? 1 : 20 }}
                animate={{
                    x: theme === "dark" ? 1 : 20,
                }}
                style={{
                    backgroundColor: theme === "dark" ? "#0f172a" : "white",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            ></motion.div>

            {/* Icon Sun */}
            <motion.div
                initial={{ opacity: theme === "dark" ? 1 : 0 }}
                animate={{ opacity: theme === "dark" ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <Image
                    src='/sun.png'
                    width={20}
                    height={20}
                    alt='Sun Icon'
                    style={{ marginRight: "1px", marginTop: "4px" }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ThemToggle;

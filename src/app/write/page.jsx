"use client";
import React, { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    //
    const { status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "authenticated") {
        router.push("/");
    }
    // Framer Motion
    const buttons = [
        { id: 1, src: "/image.png", alt: "Image", width: 20, height: 20 },
        { id: 2, src: "/external.png", alt: "External", width: 20, height: 20 },
        { id: 3, src: "/video.png", alt: "Video", width: 20, height: 20 },
    ];

    const buttonVariants = {
        hidden: { opacity: 0, y: -50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 20,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };
    return (
        <div className={styles.container}>
            <input type='text' placeholder='Title' className={styles.input} />
            <div className={styles.editor}>
                <motion.button
                    whileHover={{
                        scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ x: -50, scale: 0.8, opacity: 0.5 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 50 }}
                    className={styles.button}
                    onClick={() => setOpen(!open)}
                >
                    <Image src='/plus.png' alt='' width={20} height={20} />
                </motion.button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            className={styles.add}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2, // Chỉ định khoảng thời gian giữa các phần tử con
                                        when: "beforeChildren",
                                    },
                                },
                                exit: {
                                    opacity: 0,
                                    y: 20,
                                    transition: { duration: 0.3 },
                                },
                            }}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            {buttons.map(({ id, src, alt, width, height }) => (
                                <motion.button
                                    key={id}
                                    className={styles.addButton}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: -50,
                                            scale: 0.8,
                                        },
                                        visible: { opacity: 1, y: 0, scale: 1 },
                                        exit: { opacity: 0, y: -50 },
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={width}
                                        height={height}
                                    />
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <ReactQuill
                    theme='snow'
                    value={value}
                    onChange={setValue}
                    placeholder='Tell your story'
                />
            </div>

            {/* Nút Publish */}
            <motion.button
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 50, scale: 0.5, opacity: 0.5 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={styles.publish}
            >
                Publish
            </motion.button>
        </div>
    );
};

export default WritePage;

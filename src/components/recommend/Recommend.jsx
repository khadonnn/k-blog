"use client";
import React from "react";
import style from "./recommend.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const Recommend = ({ page, cat }) => {
    return (
        <div className={style.container}>
            <motion.div
                className={style.content}
                initial={{
                    y: 100,
                    opacity: 0,
                    scale: 0.9,
                    transform:
                        "translate3d(0px, 2rem, 0px) scale3d(0.92, 0.92, 1)",
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transform: "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 40,

                        ease: "easeOut",
                        duration: 0.8,
                    },
                }}
                style={{
                    transform: "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)", // Áp dụng hiệu ứng transform 3D
                }}
            >
                <div className={style.trend}>
                    <h1 className={style.title}>Trending {cat}</h1>
                    <span className={style.desc}>
                        Related to your posts and your comment in other blogs.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Laudantium, quidem? Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Laudantium, quidem?
                    </span>
                </div>
                <div className={style.items}>
                    <div className={style.item}>
                        <Image
                            src='/food.png'
                            alt=''
                            fill
                            className={style.img}
                        />
                    </div>
                    <div className={style.item}>
                        <Image
                            src='/food.png'
                            alt=''
                            fill
                            className={style.img}
                        />
                    </div>
                    <div className={style.item}>
                        <Image
                            src='/food.png'
                            alt=''
                            fill
                            className={style.img}
                        />
                    </div>
                    <div className={style.item}>
                        <Image
                            src='/food.png'
                            alt=''
                            fill
                            className={style.img}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Recommend;

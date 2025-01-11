import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src='/p1.jpeg'
                    alt=''
                    fill
                    priority
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.01.2025 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1 className={styles.title}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illo, assumenda!
                    </h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    iure dicta a provident sunt quaerat, praesentium neque fuga
                    deserunt inventore?
                </p>
                <Link href='/' className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;

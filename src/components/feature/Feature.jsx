import React from "react";
import styles from "./feature.module.css";
import Image from "next/image";
const Feature = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, khadon!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src='/p1.jpeg' alt='' fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, accusamus? Quisquam, iste. Eum, doloremque
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;

"use client";
import React from "react";
import styles from "./feature.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Feature = () => {
    const { data: session, status } = useSession();

    console.log(session);
    return (
        <div className={styles.container}>
            {status === "authenticated" ? (
                <h1 className={styles.title}>
                    <b>Hey, {session?.user?.name}!</b> Discover your stories and
                    creative ideas.
                </h1>
            ) : (
                <h1 className={styles.title}>
                    <b>Welcome K-Blog!</b> Login to write blogs and stories.
                </h1>
            )}
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

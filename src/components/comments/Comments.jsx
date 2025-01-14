import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comment</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder='Write a comment...'
                        className={styles.input}
                    />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href='/login'>Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            className={styles.image}
                            src='/p1.jpeg'
                            width={50}
                            height={50}
                            alt=''
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>deptrai</span>
                            <span className={styles.date}>12.01.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse dolor rem magnam beatae explicabo recusandae
                        non eligendi consectetur itaque ut.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            className={styles.image}
                            src='/p1.jpeg'
                            width={50}
                            height={50}
                            alt=''
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>deptrai</span>
                            <span className={styles.date}>12.01.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse dolor rem magnam beatae explicabo recusandae
                        non eligendi consectetur itaque ut.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            className={styles.image}
                            src='/p1.jpeg'
                            width={50}
                            height={50}
                            alt=''
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>deptrai</span>
                            <span className={styles.date}>12.01.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse dolor rem magnam beatae explicabo recusandae
                        non eligendi consectetur itaque ut.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            className={styles.image}
                            src='/p1.jpeg'
                            width={50}
                            height={50}
                            alt=''
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>deptrai</span>
                            <span className={styles.date}>12.01.2025</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse dolor rem magnam beatae explicabo recusandae
                        non eligendi consectetur itaque ut.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;

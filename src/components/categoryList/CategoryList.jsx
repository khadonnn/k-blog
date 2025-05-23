import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const res = await fetch("https://k-blog-theta.vercel.app/api/categories", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const CategoryList = async () => {
    const data = await getData();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data?.map((item) => (
                    <Link
                        href='/blog?cat=style'
                        className={`${styles.category} ${styles[item.slug]}`}
                        key={item._id}
                    >
                        {item.img && (
                            <Image
                                src={item.img}
                                width={48}
                                height={48}
                                alt=''
                                className={styles.image}
                            />
                        )}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;

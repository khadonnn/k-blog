"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <button
                type='button'
                className={styles.button}
                disabled={!hasPrev}
                onClick={() =>
                    router.push(`?page=${page - 1}`, undefined, {
                        scroll: false,
                    })
                }
            >
                Previous
            </button>
            <button
                type='button'
                disabled={!hasNext}
                className={styles.button}
                onClick={() =>
                    router.push(`?page=${page + 1}`, undefined, {
                        scroll: false,
                    })
                }
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

"use client";
import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import formatDate from "@/utils/formatDate";
const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    return data;
};
const Comments = ({ postSlug }) => {
    const { status } = useSession();
    const [desc, setDesc] = React.useState("");

    const { data, mutate, isLoading } = useSWR(
        `https://k-blog-theta.vercel.app/api/comments?postSlug=${postSlug}`,
        fetcher,
    );

    const handleSubmit = async () => {
        try {
            await fetch(
                `https://k-blog-theta.vercel.app/api/comments?postSlug=${postSlug}`,
                {
                    method: "POST",
                    body: JSON.stringify({ desc, postSlug }),
                },
            );
            setDesc("");
        } catch (err) {
            console.log(err);
        }
        mutate();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comment</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder='Write a comment...'
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href='/login'>Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading
                    ? "loading"
                    : data?.map((item) => {
                          const { timePart, datePart } = formatDate(
                              item.createdAt,
                          );
                          return (
                              <div className={styles.comment} key={item.id}>
                                  <div className={styles.user}>
                                      {item?.user?.image && (
                                          <Image
                                              src={item.user.image}
                                              alt=''
                                              width={50}
                                              height={50}
                                              className={styles.image}
                                          />
                                      )}
                                      <div className={styles.userInfo}>
                                          <span className={styles.username}>
                                              {item.user.name}
                                          </span>
                                          <span className={styles.date}>
                                              {datePart} - <i>{timePart}</i>
                                          </span>
                                      </div>
                                  </div>
                                  <p className={styles.desc}>{item.desc}</p>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
};

export default Comments;

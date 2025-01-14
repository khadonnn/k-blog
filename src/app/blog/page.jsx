import React from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Recommend from "@/components/recommend/Recommend";
const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <Recommend />
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    );
};

export default BlogPage;

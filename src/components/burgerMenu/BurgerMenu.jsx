"use client";
import { motion } from "framer-motion";
import styles from "./burgerMenu.module.css";

const BurgerMenu = ({ open, setOpen }) => {
    return (
        <div className={styles.burger} onClick={() => setOpen(!open)}>
            {/* Line 1 */}
            <motion.div
                className={styles.line}
                animate={{
                    rotate: open ? 45 : 0, // Xoay 45 độ nếu mở
                    y: open ? 8 : 0, // Dịch xuống để tạo hình chéo
                }}
                transition={{ duration: 0.1 }}
            />
            {/* Line 2 */}
            <motion.div
                className={styles.line}
                animate={{
                    opacity: open ? 0 : 1,
                }}
                transition={{ duration: 0.1, delay: open ? 0.1 : 0.2 }}
            />
            {/* Line 3 */}
            <motion.div
                className={styles.line}
                animate={{
                    rotate: open ? -45 : 0, // Xoay -45 độ nếu mở
                    y: open ? -8 : 0, // Dịch lên để tạo hình chéo
                }}
                transition={{ duration: 0.1 }}
            />
        </div>
    );
};

export default BurgerMenu;

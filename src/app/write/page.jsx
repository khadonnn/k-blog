"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// Import ReactQuill chỉ khi client-side (SSR off)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Các button sử dụng framer-motion
const buttons = [
    {
        id: 1,
        src: "/image.png",
        alt: "Image",
        width: 20,
        height: 20,
        label: "image",
    },
    {
        id: 2,
        src: "/external.png",
        alt: "External",
        width: 20,
        height: 20,
        label: "external",
    },
    {
        id: 3,
        src: "/video.png",
        alt: "Video",
        width: 20,
        height: 20,
        label: "video",
    },
];

const WritePage = () => {
    const { status } = useSession();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [previewUrl, setPreviewUrl] = useState(""); // State cho ảnh preview
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    // Upload ảnh chỉ khi ở client-side
    useEffect(() => {
        if (typeof window !== "undefined") {
            const uploadToCloudinary = async () => {
                if (!file || media) return;

                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "rtzr6utq");
                formData.append("folder", "image_blog");
                formData.append(
                    "transformation",
                    "w_500,h_500,c_limit,q_auto,f_auto",
                );
                try {
                    const response = await fetch(
                        "https://api.cloudinary.com/v1_1/dun3tupsv/image/upload",
                        {
                            method: "POST",
                            body: formData,
                        },
                    );

                    const data = await response.json();
                    setMedia(data.secure_url);
                } catch (error) {
                    console.error("Upload failed", error);
                }
            };

            uploadToCloudinary();
        }
    }, [file, media]);

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "unauthenticated") {
        router.push("/");
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style",
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug || ""}`);
        }
    };

    // Hàm xử lý khi người dùng chọn ảnh
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            setPreviewUrl(URL.createObjectURL(selectedFile)); // Tạo URL cho ảnh preview
        }
    };

    return (
        <div className={styles.container}>
            {/* Input cho tiêu đề */}
            <input
                type='text'
                placeholder='Title'
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)} // Giữ nguyên setTitle cho tiêu đề
            />
            <select
                className={styles.select}
                onChange={(e) => setCatSlug(e.target.value)}
            >
                <option value='style'>style</option>
                <option value='fashion'>fashion</option>
                <option value='food'>food</option>
                <option value='culture'>culture</option>
                <option value='travel'>travel</option>
                <option value='coding'>coding</option>
            </select>

            <div className={styles.editor}>
                <button
                    className={styles.button}
                    onClick={() => setOpen(!open)}
                >
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </button>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            className={styles.add}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2,
                                    },
                                },
                                exit: {
                                    opacity: 0,
                                    y: 20,
                                    transition: { duration: 0.3 },
                                },
                            }}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            <input
                                type='file'
                                id='image'
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                            {buttons.map(
                                ({ id, src, alt, width, height, label }) => (
                                    <motion.button
                                        key={id}
                                        className={styles.addButton}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: -50,
                                                scale: 0.8,
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            },
                                            exit: { opacity: 0, y: -50 },
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <label htmlFor={label}>
                                            <Image
                                                src={src}
                                                alt={alt}
                                                width={width}
                                                height={height}
                                                className={styles.img}
                                            />
                                        </label>
                                    </motion.button>
                                ),
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* Hiển thị ảnh preview */}
                {previewUrl && (
                    <div className={styles.previewContainer}>
                        <em>Preview</em>
                        <Image
                            src={previewUrl}
                            alt='Preview'
                            width={200}
                            height={200}
                        />
                    </div>
                )}

                {typeof window !== "undefined" && (
                    <ReactQuill
                        className={styles.textArea}
                        theme='bubble'
                        value={value}
                        onChange={setValue}
                        placeholder='Tell your story...'
                    />
                )}
            </div>
            <motion.button
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 50, scale: 0.5, opacity: 0.5 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={styles.publish}
                onClick={handleSubmit}
            >
                Publish
            </motion.button>
        </div>
    );
};

export default WritePage;

import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { NextResponse } from "next/server";

// Cấu hình Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cấu hình Multer
const upload = multer({
    storage: multer.memoryStorage(), // Lưu file vào bộ nhớ tạm
});

export const POST = async (req) => {
    try {
        // Xử lý file upload
        const data = await req.formData();
        const file = data.get("file"); // Lấy file từ form data

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 },
            );
        }

        // Upload lên Cloudinary
        const result = await cloudinary.uploader.upload(file, {
            folder: "uploads", // Thư mục trong Cloudinary
        });

        return NextResponse.json({ success: true, url: result.secure_url });
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
};

export const config = {
    api: {
        bodyParser: false, // Tắt bodyParser để xử lý form-data
    },
};

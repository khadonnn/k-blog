import React, { useState } from "react";
import styles from "./uploadform.module.css";
const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setUploadedUrl(data.url);
            } else {
                alert("Upload failed!");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div>
            <input type='file' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {uploadedUrl && (
                <div>
                    <p>Uploaded File:</p>
                    <a
                        href={uploadedUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {uploadedUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default UploadForm;

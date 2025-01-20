"use client"; // Chạy trên client

import DOMPurify from "dompurify";

const SanitizedHTML = ({ html }) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(html || ""),
            }}
        />
    );
};

export default SanitizedHTML;

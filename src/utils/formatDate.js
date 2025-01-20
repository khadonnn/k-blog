export default function formatDate(isoString) {
    const date = new Date(isoString);

    const timePart = date.toLocaleTimeString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
    });
    const datePart = date.toLocaleDateString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
    });

    return { timePart, datePart };
}

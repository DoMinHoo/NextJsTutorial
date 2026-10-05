"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h2>Review {reviewId} Not Found {productId}</h2>
            <p>The review you are looking for does not exist.</p>
        </div>
    )
}
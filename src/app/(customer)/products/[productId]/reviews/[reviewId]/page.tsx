
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ReviewId({ params }: {
    params: Promise<{ reviewId: string, productId: string }>
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Random error occurred while fetching review data");
    }
    const { reviewId, productId } = await params;
    if (parseInt(reviewId) > 100) {
        notFound();
    }
    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}
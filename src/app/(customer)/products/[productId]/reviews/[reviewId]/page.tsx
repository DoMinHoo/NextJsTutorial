import { notFound } from "next/navigation";


export default async function ReviewId({ params }: {
    params: Promise<{ reviewId: string, productId: string }>
}) {

    const { reviewId, productId } = await params;
    if (parseInt(reviewId) > 100) {
        notFound();
    }
    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}
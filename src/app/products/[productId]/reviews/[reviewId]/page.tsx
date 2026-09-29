export default async function ReviewId({ params }: {
    params: Promise<{ reviewId: string, productId: string }>
}) {

    const { reviewId, productId } = await params;
    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}
import Link from "next/link";
export default async function Products() {
    const productId = 50;
    return (
        <>
            <h1>Products List</h1>
            <h2> <Link href="/products/1">Products 1</Link></h2>
            <h2> <Link href="/products/2">Products 2</Link></h2>
            <h2> <Link href="/products/3" replace>Products 3</Link></h2>
            <h2> <Link href={`/products/${productId}`}>Products {productId}</Link></h2>
            <Link href="/">Back to Home</Link>
        </>

    )


}
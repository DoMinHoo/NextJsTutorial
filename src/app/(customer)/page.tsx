import Link from "next/link";

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <h1>Home Page</h1>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/articles/breaking-news123?lang=en">Read in English</Link>
            <Link href="/articles/breaking-news123?lang=es">Read in Spanish</Link>
            <Link href="/articles/breaking-news123?lang=fr">Read in French</Link>
        </div>
    )

}
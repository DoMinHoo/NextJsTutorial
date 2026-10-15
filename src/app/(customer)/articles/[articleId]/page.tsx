"use client";
import Link from "next/link";
import { use } from "react";
export default function Articles({ params, searchParams }:
    {
        params:
        Promise<{ articleId: string }>,
        searchParams: Promise<{ lang?: "es" | "en" | "fr " }>
    }) {
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);
    return (
        <div>
            <h1>New Articles {articleId}</h1>
            <p>Reading in language: {lang}</p>

            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Link replace href={`/articles/${articleId}?lang=en`}>Read in English</Link>
                <Link replace href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
                <Link replace href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
            </div>
        </div>
    )
}
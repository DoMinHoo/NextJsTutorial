"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

const navLink = [
    { href: "/login", name: "Đăng nhập" },
    { href: "/register", name: "Đăng ký" },
    { href: "/forgot-password", name: "Quên mật khẩu" },
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [input, setInput] = useState("");
    const pathname = usePathname();
    return (
        <html lang="vi">
            <body
                suppressHydrationWarning
                style={{
                    margin: 0,
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'system-ui, sans-serif',
                }}
            >


                {/* Body */}
                <main style={{ flex: 1, padding: 32 }}>
                    <div>
                        <input value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div>
                        {navLink.map((link) => {
                            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                            return (
                                <Link style={isActive ? { fontWeight: 'bold', marginRight: 16 } : { color: 'blue', marginRight: 16 }} href={link.href} key={link.href}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>
                    {children}
                </main>

                {/* Footer */}
                <footer
                    style={{
                        padding: 16,
                        textAlign: 'center',
                        background: '#f3f4f6',
                        color: '#6b7280',
                        fontSize: 14,
                    }}
                >
                    © 2026 Tên website của bạn. All rights reserved.
                </footer>
            </body>
        </html>
    )
}
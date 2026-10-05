export const metadata = {
    title: 'Next.js',
    description: 'Next.js tutorial',
};

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi" suppressHydrationWarning >
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
                {/* Header */}
                <header
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px 32px',
                        background: '#111827',
                        color: '#fff',
                    }}
                >
                    <h1 style={{ margin: 0, fontSize: 20 }}>Logo</h1>
                    <nav style={{ display: 'flex', gap: 24 }}>
                        <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Trang chủ</a>
                        <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>Giới thiệu</a>
                        <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Liên hệ</a>

                    </nav>
                </header>

                {/* Body */}
                <main style={{ flex: 1, padding: 32 }}>
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
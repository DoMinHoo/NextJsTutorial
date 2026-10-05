export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
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
                {/* Header */}

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
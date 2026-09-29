export default async function Docs({ params }: {
    params: Promise<{ slug?: string[] }> // Thêm dấu ? ở đây vì slug có thể không tồn tại
}) {
    const { slug } = await params;

    if (slug?.length === 2) {
        return (
            <h1>
                View docs feature {slug[0]} and concept {slug[1]}
            </h1>
        )
    } else if (slug?.length === 1) {
        return <h1>View docs feature {slug[0]}</h1>
    }

    // Trình duyệt sẽ chạy vào đây khi truy cập thẳng vào đường dẫn `/docs`
    return (
        <div>
            <h1>Docs Home Page</h1>
        </div>
    )
}

export default async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay for 2 seconds to show loading state");
        }, 2000);
    });

    return <h1>Blog Page</h1>;


}
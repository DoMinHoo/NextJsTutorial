"use client";
import { useRouter } from "next/navigation";
export default function OrderProducts() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Order Now button clicked");
        router.push("/");
    }
    return (
        <div>
            <h1>Order Products Page</h1>
            <p>This is the Order Products page.</p>
            <button onClick={handleClick}>Order Now</button>
        </div>
    )
}
import { headers } from "next/headers";
import Link from "next/link";

export default function Navigation() {
    return <header className="grid grid-cols-2">
        <div className=""></div>
        <nav>
            <ul className="flex gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/contact">Contact</Link></li>

            </ul>
        </nav>
    </header>
}

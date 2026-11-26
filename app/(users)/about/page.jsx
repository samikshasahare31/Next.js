// import styles from "./about.module.css";
export const metadata = {
    title: "About Page",
    description: "This is my About page",
    authors: [{ name: "john" }, { name: "amazing" }],
    keyword: ['next.js', 'react.js', 'fullstack'],
};

export default function About() {
    return (
        <h1 className="about_heading">
            Hello About
        </h1>
    );
}

// import Link from "next/link";

// const About = async () => {
//     return (
//         <>
//             <h1>Hello About</h1>
//             <button>
//                 <Link href="/">Home Page</Link>
//             </button>
//         </>
//     );
// };

// export default About;

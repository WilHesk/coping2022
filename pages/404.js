import Link from "next/link";
import styles from '../styles/Home.module.css';
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page can't be found.</h2>
                <Link href="/">
                <a className={styles.btn}>HOME</a>
                </Link>
            

        </div>
    );
}
 
export default NotFound;
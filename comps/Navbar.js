import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
    <nav>
        <div className="logo">
            <Image src="/Coping-Logo.png" width={150} height={112.5}/>
        </div>

        <div className={styles.temptext}>
            <h4>**SITE UNDER CONSTRUCTION**</h4>
        </div>
        
        <Link href="/"><a>HOME</a></Link>
        <Link href="/about"><a>ABOUT</a></Link>
        <Link href="/contact"><a>CONTACT</a></Link>

        
        
    </nav>
    );
}
 
export default Navbar;
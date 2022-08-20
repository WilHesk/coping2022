import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Coping UK | Home</title>
        <meta name="keywords" content="CopingUK"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
        Coping Festival is a celebration of people and organisations who are trying to do things differently to benefit the greater good. It’s where we come together to celebrate, confide, collaborate and create stories that change the world - to create a brighter future for us all.
        </p>
        <Link href="https://www.justgiving.com/crowdfunding/copingfestival2022">
          <a target="_blank" className={styles.btn}>Donate</a>
        </Link>
        
      </div>
    </>
  )
}

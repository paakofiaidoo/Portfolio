import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Paa-Kofi Aidoo</title>
				<link rel="icon" href="/brand/cover.png" />
			</Head>

			<main className={styles.main}>
				<Intro />
				<About />
			</main>

			<footer className={styles.footer}>
        <button className={styles.btn}>
          <Link href="#intro">top</Link>
        </button>
      </footer>
		</div>
	);
}

const Intro = () => {
	return (
		<div id="intro" className={styles.intro}>
			<div>
				<img
					src="/brand/vector/default-monochrome.svg"
					alt="profile pic"
					className={styles.avatar}
				/>
				<div className={styles.details}>
					<ul>
						<li>
							<Link href="https://web.facebook.com/paakofi.aidoo">
								<img
									src="/facebook.svg"
									alt="facebook"
									className={styles.contact}
								/>
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/pk_aidoo">
								<img
									src="/instagram.svg"
									alt="instagram"
									className={styles.contact}
								/>
							</Link>
						</li>
						<li>
							<Link href="https://twitter.com/PaaKofiaidoo2">
								<img
									src="/twitter.svg"
									alt="twitter"
									className={styles.contact}
								/>
							</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/in/paa-kofi-aidoo-a98036183/">
								<img
									src="/linkedin.svg"
									alt="linkedin"
									className={styles.contact}
								/>
							</Link>
						</li>
						<li>
							<Link href="https://wa.me/233202396856">
								<img
									src="/whatsapp.svg"
									alt="whatsapp"
									className={styles.contact}
								/>
							</Link>
						</li>
						<li>
							<Link href="https://github.com/paakofiaidoo">
								<img
									src="/github.svg"
									alt="github"
									className={styles.contact}
								/>
							</Link>
						</li>
						<li>
							<Link href="mailto:paakofiaidoo17@gmail.com">
								<img src="/mail.svg" alt="email" className={styles.contact} />
							</Link>
						</li>
						<li>
							<Link href="tel:+233202396856">
								<img
									src="/telephone.svg"
									alt="call"
									className={styles.contact}
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<div id="about" className={styles.about}>
			<h2>About Me</h2>
			<li>Bsc Physics (level 300 Undergrad, KNUST, Kumasi, Ghana)</li>
			<li>Junior FrontEnd Web Developer (HTM5, CSS, JS , react, nextjs)</li>
			<li>Junior C++ programer</li>
			<li>Beginner to IOT</li>
			<li>Electronics hobbyist</li>
			<li>Afrodew (Embedded System Team member)</li>
			<p className={styles.bio}>
				<h4>Bio : </h4>
				<p>
					I was born on the 4th feb, 2000 and since then I have been fascinated
					about computers and electronics. I started programing with python at
					the age of 16 but gave up because I got confused at some point but not
					wanting to give up on my dream as a programer I forced to go to a web
					dev class at Kumasi Hive when I was in first year at KNUST where I met
					my mentor Gtime, from there I kept climbing the ladder to the point I
					am at today and I am still persevering.
				</p>
				<p>
					I live with the presuit of knowledge, knowing that since the universe
					is infinite knowledge is also infinite. I am always glad to learn
					something new and I try to always solve problems rather than creating
					them. I have phlegmatic temperament with and introvert personality
					with a mind full of questions which don't conform with the status-co
				</p>
			</p>
		</div>
	);
};

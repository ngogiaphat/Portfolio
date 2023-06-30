import Head from 'next/head';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import React, {useState} from 'react';
import Email from '@/components/Email';
import Footer from '@/sections/Footer';
import Navbar from '@/sections/Navbar';
import Loader from '@/components/Loader';
import Contact from '@/sections/Contact';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import SocialIcons from '@/components/SocialIcons';
function Index(){
	const [isLoading, setIsLoading] = useState(true);
	const [showContent, setShowContent] = useState(false);
	const handleLoaderLoaded = () => {
		setIsLoading(false);
		setTimeout(() => setShowContent(true), 450);
	};
	return(
		<div className="app">
			<Head>
				<title>
					Gia Phat
				</title>
				<link rel="shortcut icon" href="/favicon.ico"/>
			</Head>
			{showContent && (
				<>
					<Email/>
					<Navbar/>
					<SocialIcons/>
					<main>
						<Hero/>
						<About/>
						<Experience/>
						<Projects/>
						<Contact/>
					</main>
					<Footer/>
				</>
			)}
			<Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded}/>
		</div>
	);
};
export default Index;
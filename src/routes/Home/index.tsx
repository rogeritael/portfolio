import { Header } from '../../components/lg/Header';
import { Cover } from '../../components/lg/Cover';
import { SkillsContainer } from '../../components/lg/SkillsContainer';
import { Projects } from '../../components/lg/Projects';
import { Footer } from '../../components/lg/Footer';
import { FAQ } from '../../components/lg/FAQ';
import { MobileMenu } from '../../components/lg/MobileMenu';
import { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ContactForm } from '../../components/md/ContactForm';

export function Home(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    },[])

    return(
        <>
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Cover />
            <SkillsContainer />
            <Projects />
            {/* <FAQ /> */}
            <ContactForm />
            <Footer />
        </>
    )
}
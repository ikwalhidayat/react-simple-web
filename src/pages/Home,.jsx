import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { homeSection } from '../data/HomeSection'
import { courseSection } from "../data/CourseSection"
import Tutors from "../components/Tutors"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import { partnersSection, partnersList } from "../data/PartnertsSection"
import Partners from "../components/Partners"


import parse from 'html-react-parser'
import '../styles/Home.css'
import Contact from "../components/Contact"
import { contactSection } from "../data/ContactSection"
function Home() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
            {/* Home */}
            <section id="home">
                <img src={homeSection.image} />
                <div className="kolom">
                    {parse(homeSection.content)}
                </div>
            </section>

            {/* online course */}
            <section id="courses">
                <div className="kolom">
                    {parse(homeSection.content)}                     
                </div>
                <img src={courseSection.image} />
            </section>  

            {/* Tutors */}
            <section id="tutors">
                <div className="tengah">
                    <div className="kolom">
                        {parse(tutorsSection.content)}
                    </div>

                    <Tutors tutorsList={tutorsList} />
                </div>
            </section>

            {/* partners */}
            <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                        {parse(partnersSection.content)}
                    </div>

                    <Partners partnersList={partnersList} />
                </div>
            </section>

        </div>
        <Contact contactSection={contactSection} />
        <Footer />
    </>
  )
}

export default Home
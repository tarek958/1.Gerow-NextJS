import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home4/About"
import About2 from "@/components/sections/home4/About2"
import Banner from "@/components/sections/home4/Banner"
import Blog from "@/components/sections/home4/Blog"
import Blog2 from "@/components/sections/home4/Blog2"
import Brand from "@/components/sections/home4/Brand"
import Counter from "@/components/sections/home4/Counter"
import Cta from "@/components/sections/home4/Cta"
import Project from "@/components/sections/home4/Project"
import Request from "@/components/sections/home4/Request"
import Services from "@/components/sections/home4/Services"
import Team from "@/components/sections/home4/Team"
import Team2 from "@/components/sections/home4/Team2"
import Testimonial from "@/components/sections/home4/Testimonial"
import Faq from "@/components/sections/home4/Faq"
import Overview2 from "@/components/sections/home4/Overview2"
import Contact from "@/components/sections/home4/Contact"
export default function Home4() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={2}>
                <Banner />
                <About />
                <About2 />
                <Faq/>
                <Overview2/>
                <Team />
                <Team2 />
                <Contact/>
                <Blog2/>
        
            </Layout>
        </>
    )
}
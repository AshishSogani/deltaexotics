import Header from '../Component/Common/Header'
import Footer from '../Component/Common/Footer'
import HomeBanner from '../Component/Home/HomeBanner'
import HomeWelcome from '../Component/Home/HomeWelcome'
import HomeUniqueCollection from '../Component/Home/HomeUniqueCollection'
import HomeInventory from '../Component/Home/HomeInventory'
import HomeContact from '../Component/Home/HomeContact'
import HomeServices from '../Component/Home/HomeServices'

const Home = () => {
    return (
        <>
            <section className='main-wrap'>
                <Header/>
                <HomeBanner/>
                <HomeServices/>
            </section>
            <HomeWelcome/>
            <HomeUniqueCollection/>
            <HomeInventory/>
            <HomeContact/>
            <Footer/>
        </>
    )
}

export default Home
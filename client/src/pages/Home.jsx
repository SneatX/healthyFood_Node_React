import ProfileHeader from '../components/ProfileHeader.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Categories from '../components/Categories.jsx'

export default function Home(){
    return(
        <main className="bg-[#FFF] p-5">
            <section className='py-3'>
                <ProfileHeader />
            </section>
            <section className=''>
                <SearchBar />
            </section>
            <section>
                <Categories />
            </section>
        </main>
    )
}
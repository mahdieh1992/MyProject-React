import './Header.css'
import './Responsive.css'
import Nav from './Nav'


export default function Header() {
    return (
        <div className='container'>
            <Nav/>
            <div className='content'>
                <h2 className='content__title'>Find Yourself Outside.</h2>
                <p className='content__description'>Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.</p>
                <a className='btn content__link' href='#'>Discover</a>
            </div>

        </div>
    )
}
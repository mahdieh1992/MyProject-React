import './Place.css'
// import PropTypes from 'prop-types';




export default function Place({ image, like: likeIcon, price = 9000, title, caption, children }) {
    return (
        price > 360 &&
        <div className="place">

            <div className="place__baner">
                <img src={image} className='place__img'></img>
                <div className="place__like">
                    <img src={likeIcon} className="place__like-icon"></img>
                </div>
                <div className="place__price">
                    <p className="place__price-text">{children} {price}</p>
                </div>


            </div>
            <h2 className="place__title">{title}</h2>
            <p className="place__caption">{caption}</p>
            <a href="#" className="btn place__link">ReadMore</a>

        </div>

    )
}

// if one of properties doesn't value
// Place.defaultProps = {
//     image: 'svgs/fire.svg'
// }


//validate prop
// Place.PropTypes = {
//     title: PropTypes.string,
// }
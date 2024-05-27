import './Services.css'


export default function Services({ image, title, caption }) {
    return (
        <section className="services">
            <div className="service">
                <img className="service__img" src={image} alt='services'></img>
                <h2 className="service__title">{title}</h2>
                <p className="service__caption">{caption}</p>
            </div>
        </section>
    )

}
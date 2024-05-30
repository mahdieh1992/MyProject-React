import Place from "./Place"
import './Destination.css'
import React from 'react';
import MatchForm from "./MatchForm";


var interval, name, lastName, emailCheck, massage
export default class Destination extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            place: [
                { id: 1, image: 'images/image1.jpg', like: 'svg-icons/out-heart.svg', price: 3600, title: 'Trickle Creek Ranch', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 2, image: 'images/image2.jpg', like: 'svg-icons/heart.svg', price: 5400, title: 'Dragonfly Tiny Cabin', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 3, image: 'images/image3.jpg', like: 'svg-icons/out-heart.svg', title: 'Tiny Cabin in the mountains', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 4, image: 'images/image4.jpg', like: 'svg-icons/out-heart.svg', price: 360, title: 'The Stuga', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 5, image: 'images/image5.jpg', like: 'svg-icons/heart.svg', price: 4300, title: 'Luxury Tiny Beach Cabin', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 6, image: 'images/image6.jpg', like: 'svg-icons/out-heart.svg', price: 2000, title: 'The Summit Cabin', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 7, image: 'images/image7.jpg', like: 'svg-icons/out-heart.svg', price: 32000, title: 'Kindred Spirits Cabin', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 8, image: 'images/image8.jpg', like: 'svg-icons/heart.svg', price: 10000, title: 'The Hermitage Cabin', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 9, image: 'images/image9.jpg', like: 'svg-icons/out-heart.svg', price: 20000, title: 'Red Lifeguard Stand', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 10, image: 'images/image10.jpg', like: 'svg-icons/out-heart.svg', price: 32000, title: 'The Tree House', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 11, image: 'images/image11.jpg', like: 'svg-icons/out-heart.svg', price: 15000, title: 'Barrier island elevated tent', caption: 'Book unique camping experiences on over 300,000 campsites.' },
                { id: 12, image: 'images/image12.jpg', like: 'svg-icons/out-heart.svg', price: 32000, title: 'Ninovan on the Shore', caption: 'Book unique camping experiences on over 300,000 campsites.' }
            ],
            title: 'Explore Destinations & Activities',//change title after click view all call handelHeart,
            email: '',
            nameData: '',
            lastNameData: '',
            submit: false,
            allValue: false,
           
        }
        this.nameDataHandle = this.nameDataHandle.bind(this)
        this.lastNameDataHandle = this.lastNameDataHandle.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }



    countHandel() {
        interval = setInterval(() => {

            this.setState((prevState) => {
                return { count: prevState.count - 1 }
            })
        }, 1000);

    }


    componentDidUpdate() {
        if (this.state.count === 0) {
            clearInterval(interval)
        }
    }

    countView(count, event) {

        console.log(`Your view count is ${count}`)
        console.log(event.target)

    }
    emailHandle(event) {
        this.setState({
            email: event.target.value
        })

    }

    nameDataHandle(event) {
        this.setState(
            {
                nameData: event.target.value
            }
        )

    }
    lastNameDataHandle(event) {
        this.setState(
            { lastNameData: event.target.value }
        )


    }

    submitHandle(event) {
        setTimeout(() => {
            this.setState({
                allValue: false
            })

        }, 5000)

        event.preventDefault()
        this.setState({ submit: true })
        if (this.state.submit && this.state.email.length == 0) {
            emailCheck = <span>Please Enter your Email</span>
        }
        if (this.state.submit && this.state.nameData.length == 0) {
            name = <span>Please Enter your FirsName</span>
        }
        if (this.state.submit && this.state.lastNameData.length == 0) {
            lastName = <span>Please Enter your LastName</span>
        }

        if (this.state.email.length !== 0 && this.state.nameData.length !== 0 && this.state.lastNameData.length !== 0) {
            this.setState({
                allValue: true
            })
        }


    }
    render() {
        return (
            <section className="destination">

                <img className="destination__log" src="svgs/destination.svg" alt='destination'></img>
                <h2 className="destination__title">{this.state.title} <span> {this.state.count} </span></h2>
                <div className="destination__places">

                    {this.state.place.map((place) => (
                        <div key={place.id}><Place {...place} /></div>
                    )

                    )}


                </div>
                <div className="destination__links">
                    <a onClick={this.countHandel.bind(this)} href="#" className="btn destination__link">View all</a>
                    <a onClick={(event) => this.countView(52, event)} href="#" className="btn destination__link">Show Count View </a>

                </div>
                <div className="forms">
                    <div className="contact-us">
                        {this.state.submit && this.state.allValue && (<div className="Success">Success</div>)}
                        <h3 className="contact-us__title">Contact us</h3>

                        <form className="contact-us__form" onSubmit={this.submitHandle}>
                            <input className="contact-us__in-name" value={this.state.nameData} onChange={(event) => this.nameDataHandle(event)} placeholder='FirstName'></input>
                            {name}
                            <input className="contact-us__in-lastName" value={this.state.lastNameData} onChange={(event) => this.lastNameDataHandle(event)} placeholder='LastName'></input>
                            {lastName}
                            <input className="contact-us__in-email" value={this.state.email} onChange={(event) => this.emailHandle(event)} placeholder='Email'></input>
                            {emailCheck}
                            <input className="btn contact-us__submit" type="submit" value="Submit"></input>

                        </form>

                    </div>
                    <div className="question">
                     
                            <div ><MatchForm/></div>
                    

                    </div>
                </div>

            </section>

        )
    }

}
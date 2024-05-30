import './Ticket.css'
import React from 'react'
import User from './Users'



export default class Ticket extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Countries: {
                Netherland: ['Tilburg', 'Amsterdam', 'Rotterdam'],

                American: ['Los Angeles', 'New York', 'Phoenix'],

            },
            cityMain: [],
            users: [
                { id: 1, name: 'mtin' },
                { id: 2, name: 'Mahdieh' },
                { id: 3, name: 'shayan' },
                { id: 4, name: 'kimia' },
                { id: 5, name: 'sepehr' }
            ],
        }
        this.countryHandler = this.countryHandler.bind(this)
        this.userRemoveHandle = this.userRemoveHandle.bind(this)


    }
    countryHandler(event) {
        let mainCountry = event.target.value
        if (mainCountry == -1) {
            this.setState({
                cityMain: []
            })
        }
        if (mainCountry in this.state.Countries) {
            let cityMainCountry = this.state.Countries[mainCountry]
            this.setState({
                cityMain: cityMainCountry
            })
        }

    }

    userRemoveHandle(userId) {
       let currentUser=[...this.state.users]
       let indexUser=currentUser.findIndex((user)=>{
               return user.id==userId
       })

       currentUser.splice(indexUser,1)
       this.setState({
            users:currentUser
       })
    }

    render() {
        return (
            <>
                <div className='ticket'>
                    <form className='ticketForm'>
                        <input className='ticketForm__in' placeholder='FirstName'></input>
                        <input className='ticketForm__in' placeholder='LastName'></input>
                        <input className='ticketForm__in' placeholder='Email'></input>
                        <input className='ticketForm__in' placeholder='PhoneNumber'></input>
                        <select className='ticketForm__Country' onChange={(event) => { this.countryHandler(event) }}>
                            <option value='-1'>Please Selected</option>
                            <option value='Netherland'>Netherland</option>
                            <option value='Iran'>Iran</option>
                            <option value='American'>American</option>

                        </select>
                        <select className='ticketForm__city'>
                            {this.state.cityMain.length > 0 ? this.state.cityMain.map(city => (
                                <option value={city}>{city}</option>
                            )) :
                                <option value='-1'>please select</option>
                            }

                        </select>
                        <button className='btn ticketForm__Btn' >Book a Ticket</button>
                    </form>

                </div>
                {this.state.users.map(user => (
                    <User key={user.id} {...user} onRemove={this.userRemoveHandle} />
                ))}

            </>
        )
    }

}
import React from "react";
import './Users.css'
import { FaUserGraduate } from 'react-icons/fa6'

export default class User extends React.Component {

    constructor(props) {
        super(props)


    }

    deleteUser(id) {
        this.props.onRemove(id)

    }

    render() {
        return (
            <>
                {/* <div className="User">
                    <FaUserGraduate /><h4 className="User__show">{this.props.name}<button onClick={this.deleteUser.bind(this, this.props.id)} className="User__delete">Delete</button></h4>
                </div> */}

            </>
        )
    }

}
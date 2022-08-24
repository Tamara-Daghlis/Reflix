import { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {

    render() {
        let users = this.props.users
        return (
            <div>
                <h1 id="main-text">WHO'S WATCHINH</h1>
                <div id="users-container">
                    {users.map((user) => {
                        return (
                            <div id="user">
                                <Link to='/catalog'>{user.name}</Link>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}
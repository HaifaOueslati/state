import React, { Component } from "react";
import profilePhoto from "./haifa.jpg"


 
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer:0,
            interval:null
        }
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({timer: this.state.timer +1})
            }, 1000)
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }
    Person = {
        fullName: " Haifa Oueslati",
        bio: " I am a developer",
        imgSrc: profilePhoto,
        profession: " Student"

    }
    render() {
        return (
            <div className="profile">
                <img className="img" src={this.Person.imgSrc} alt="profilephoto" />
                <h2 className="Name">Full Name:{this.Person.fullName }</h2>
                <h2 className="Name">Bio:{this.Person.bio}</h2>
                <h2 className="Name">Profession:{this.Person.profession}</h2>
                <h2 className="Name"> Timer:{this.state.timer}</h2>
            </div>
        )
    }
}

export default Profile;
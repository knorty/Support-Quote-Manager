import React from "react";
import MenuIcon from "./icons/menu-btn.svg";
import "./css/Home.css"

class Home extends React.Component {
    state = {
        menu: false
    }

    toggle = () => {
        this.setState({
            menu: !this.state.menu
        })

    }

    goToSearch = () => { this.props.history.push(`/search`) };
    goToEntry = () => { this.props.history.push(`/entry`) };

    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <div className="company-logo">ProEx</div>
                    <div className="home-menu">
                        <div className="home-menu-btn-container">
                            <img className="home-menu-icon" src={MenuIcon} alt="Menu Icon" onClick={this.toggle} />
                        </div>
                        {this.state.menu ?
                            <div className="home-menu-items">
                                <button className="home-menu-item" onClick={this.goToSearch}>Search</button>
                                <button className="home-menu-item" onClick={this.goToEntry}>Add Entry</button>
                            </div> : null
                        }
                    </div>
                </div>
                <div className="home-body">
                    <div className="home-title">
                        Support Quote Manager
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
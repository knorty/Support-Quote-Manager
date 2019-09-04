import React from "react";
import DeviceEntry from "./DeviceEntry";
import TapeEntry from "./TapeEntry";
import BackArrow from "./icons/left-arrow.svg";
import "./css/Entry.css";
import "./css/Form.css";
import MenuIcon from "./icons/menu-btn.svg";


class Entry extends React.Component {
    state = {
        menu: false,
        deviceSelected: 'selected',
        tapeSelected: 'un-selected'
    }

    toggle = () => { this.setState({ menu: !this.state.menu }) };
    goToSearch = () => { this.props.history.push(`/search`) };
    goToHome = () => { this.props.history.push(`/`) };
    selectType = (e) => {
        e.target.name === 'deviceSelected' ?
            this.setState({
                [e.target.name]: 'selected',
                tapeSelected: 'un-selected'
            }) : this.setState({
                deviceSelected: 'un-selected',
                tapeSelected: 'selected'
            })

    }

    render() {
        return (
            <div className="entry">
                <div className="entry-header">
                    <img className="back-arrow" src={BackArrow} alt="Back Arrow" onClick={this.goToSearch} />
                    <div className="entry-page-title">
                        Entry Form
                    </div>
                    <div className="entry-menu">
                        <div className="entry-menu-btn-container">
                            <img className="entry-menu-icon" src={MenuIcon} alt="Menu Icon" onClick={this.toggle} />
                        </div>
                        {this.state.menu ?
                            <div className="entry-menu-items">
                                <button className="entry-menu-item" onClick={this.goToSearch}>Search</button>
                                <button className="entry-menu-item" onClick={this.goToHome}>Home</button>
                            </div> : null
                        }
                    </div>
                </div>
                <div className="entry-options">
                    <button className={this.state.deviceSelected} name="deviceSelected" onClick={this.selectType}>Device</button>
                    <button className={this.state.tapeSelected} name="tapeSelected" onClick={this.selectType}>Tape</button>
                </div>
                <div className="entry-container">
                    {this.state.deviceSelected === 'selected' ? <DeviceEntry /> : <TapeEntry />}
                </div>
            </div>
        );
    }
}

export default Entry;
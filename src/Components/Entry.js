import React from "react";
import DeviceEntry from "./DeviceEntry";
import TapeEntry from "./TapeEntry";
import "../css/Entry.css";
import "../css/Form.css";


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
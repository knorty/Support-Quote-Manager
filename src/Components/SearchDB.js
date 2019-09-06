import React from "react";
import axios from "axios";
import TapeLookUp from "./TapeLookUp.js";
import DeviceLookUp from "./DeviceLookUp.js";
import AddButton from "./icons/plus-button.svg";

class SearchDB extends React.Component {
    state = {
        tape: [],
        device: [],
        searchTape: '',
        searchDevice: ''
    };

    handleTape = (e) => {
        this.setState({ [e.target.name]: e.target.value, device: [], searchDevice: '' });
        this.getTape(e.target.value)

    };

    handleDevice = (e) => {
        this.setState({ [e.target.name]: e.target.value, tape: [], searchTape: '' });
        this.getDevice(e.target.value)
    };


    getTape = (e) => {
        console.log(`/carrier_tape/${e}`)
        axios
            .get(`/carrier_tape/${e}`)
            .then(response => this.setState({
                tape: response.data
            }))
            .catch(console.error);
    }

    getDevice = (e) => {
        console.log(`/devices/${e}`)
        axios
            .get(`/devices/${e}`)
            .then(response => this.setState({
                device: response.data
            }))
            .catch(console.error);
    }

    goToHome = () => { this.props.history.push(`/`) }
    goToEntry = () => { this.props.history.push(`/entry`) }

    render() {
        const tapeResults = this.state.tape.map((tape, index) => {
            return (
                <TapeLookUp
                    id={index}
                    carrier_tape={tape.carrier_tape}
                    vendor={tape.vendor}
                    pitch={tape.pitch}
                    ao={tape.ao}
                    bo={tape.bo}
                    ko={tape.ko}
                />
            )
        })

        const deviceResults = this.state.device.map((device, index) => {
            return (
                <DeviceLookUp
                    id={index}
                    mpn={device.mpn}
                    customer={device.customer}
                    package_type={device.package_type}
                    device_ao={device.device_ao}
                    device_bo={device.device_bo}
                    device_ko={device.device_ko}
                    history={this.props.history}
                />
            )
        })
        return (
            <div>
                <div className="search-header">
                    <div className="logo" onClick={this.goToHome}>
                        SQM
                    </div>
                    <div className="searchBars-container">
                        <div className="searchBar">
                            <div className="input"><input name="searchTape" value={this.state.search} onChange={this.handleTape} placeholder="SEARCH TAPE" /></div>
                        </div>
                        <div className="searchBar">
                            <div className="input-"><input name="searchDevice" value={this.state.search} onChange={this.handleDevice} placeholder="SEARCH DEVICE" /></div>
                        </div>
                        <img className="add-btn" src={AddButton} alt="Add Button" onClick={this.goToEntry} />
                    </div>
                </div>
                <div className="body">
                    <div className="search-results">
                        {tapeResults}
                        {deviceResults}
                    </div>
                </div>
            </div>

        );
    }
}

export default SearchDB;
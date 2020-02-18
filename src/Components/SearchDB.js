import React from "react";
import axios from "axios";
import TapeLookUp from "./TapeLookUp.js";
import DeviceLookUp from "./DeviceLookUp.js";
import "../css/SearchDB.css";

class SearchDB extends React.Component {
    state = {
        tape: [],
        device: [],
        searchTape: '',
        searchDevice: ''
    };

    handleTape = (e) => {
        const emptyChar = e.target.value.charAt(0);
        if (emptyChar !== ' ') {
            this.setState({ [e.target.name]: e.target.value, device: [], searchDevice: '' });
            if (e.target.value) {
                this.getTape(e.target.value)
            }
        }
    };

    handleDevice = (e) => {
        const emptyChar = e.target.value.charAt(0);
        if (emptyChar !== ' ') {
            this.setState({ [e.target.name]: e.target.value, tape: [], searchTape: '' });
            if (e.target.value) {
                this.getDevice(e.target.value)
            }
        }
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
            .then(response => this.setState({ device: response.data }))
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
                    history={this.props.history}
                />
            )
        })

        const deviceResults = this.state.device.map((device) => {
            return (
                <DeviceLookUp
                    id={device.id}
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
            <div className="search-page">
                <div className="search-bar">
                    <div className="search-input"><input name="searchTape" value={this.state.search} onChange={this.handleTape} placeholder="SEARCH TAPE" /></div>
                    <div className="search-input"><input name="searchDevice" value={this.state.search} onChange={this.handleDevice} placeholder="SEARCH DEVICE MPN" /></div>
                </div>
                {this.state.searchTape === '' && this.state.searchDevice === '' ? <div className="search-message-container"><div className="search-message">Search Tape or Device</div></div> :
                    <div className="results-body">
                        {tapeResults}
                        {deviceResults}
                    </div>}
            </div>

        );
    }
}

export default SearchDB;
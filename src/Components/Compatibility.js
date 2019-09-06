import React from "react";
import axios from "axios";

class Compatibility extends React.Component {
    state = {
        device: null,
        tape: []

    };

    componentDidMount() {
        axios
            .get(`/devices/${this.props.match.params.mpn}`)
            .then(response => {
                if (response.data.length) {
                    this.setState({
                        device: response.data[0]
                    })
                    axios
                        .post('/compatible_tapes', response.data[0])
                        .then(response => {
                            this.setState({
                                tape: response.data
                            })
                        })
                }
            })
            .catch(console.error);
    }

    goToSearch = () => { this.props.history.push(`/search`) };

    render() {
        console.log(this.state)
        const tapes = this.state.tape.map((tape, index) => {
            return (
                <div className="results" key={index}>
                    <div className="info-item">
                        <div className="info-name">
                            Carrier Tape
                </div>
                        <div className="info">
                            {tape.carrier_tape}
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-name">
                            Vendor
                </div>
                        <div className="info">
                            {tape.vendor}
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-name">
                            Pitch
                </div>
                        <div className="info">
                            {tape.pitch}
                        </div>
                    </div>
                    <div className="dim">
                        <div className="info-name">
                            A0
                </div>
                        <div className="info">
                            {tape.ao}
                        </div>
                    </div>
                    <div className="dim">
                        <div className="info-name">
                            B0
                </div>
                        <div className="info">
                            {tape.bo}
                        </div>
                    </div>
                    <div className="dim">
                        <div className="info-name">
                            K0
                </div>
                        <div className="info">
                            {tape.ko}
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div className="compatible-tapes">
                <div className="info-item">
                    <button className="btn" onClick={this.goToSearch}>Back</button>
                </div>
                <div className="body">
                    <div className="search-results">
                        {tapes}
                    </div>
                </div>
            </div>
        )
    }
}

export default Compatibility;
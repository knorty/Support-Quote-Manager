import React from 'react';
class DeviceLookUp extends React.Component {

    goToTape = () => {
        this.props.history.push(`/device/${this.props.mpn}`)
    }
    editDevice = () => {
        this.props.history.push(`/edit_device/${this.props.mpn}`)
    }

    render() {
        return (
            <div className="results" key={this.props.index}>
                <div className="info-item">
                    <div className="info-name">
                        MPN
                </div>
                    <div className="info-mpn">
                        {this.props.mpn}
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-name">
                        Customer
                </div>
                    <div className="info">
                        {this.props.customer}
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-name">
                        Package Type
                </div>
                    <div className="info">
                        {this.props.package_type}
                    </div>
                </div>
                <div className="dim">
                    <div className="info-name">
                        A0
                </div>
                    <div className="info">
                        {this.props.device_ao}
                    </div>
                </div>
                <div className="dim">
                    <div className="info-name">
                        B0
                </div>
                    <div className="info">
                        {this.props.device_bo}
                    </div>
                </div>
                <div className="dim">
                    <div className="info-name">
                        K0
                </div>
                    <div className="info">
                        {this.props.device_ko}
                    </div>
                </div>
                <div className="info-item">
                    <button className="big-btn" onClick={this.goToTape}>Get Tape</button>
                </div>
                <div className="info-item">
                    <button className="big-btn" onClick={this.editDevice}>Edit</button>
                </div>
            </div>
        );
    }
}

export default DeviceLookUp;
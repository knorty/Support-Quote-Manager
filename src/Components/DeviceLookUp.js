import React from 'react';
class DeviceLookUp extends React.Component {

    goToTape = () => {
        this.props.history.push(`/device/${this.props.mpn}`)
    }
    viewDevice = () => {
        this.props.history.push(`/view/device/${this.props.mpn}`)
    }
    editDevice = () => {
        this.props.history.push(`/edit_device/${this.props.mpn}`)
    }

    render() {
        return (
            <div className="results" key={this.props.id}>
                <div className="info-item">
                    <div className="info">
                        {this.props.mpn}
                    </div>
                </div>
                <div className="option-btns">
                    <button className="big-btn" onClick={this.goToTape}>Get Tape</button>
                    <button className="big-btn" onClick={this.viewDevice}>View</button>
                    <button className="big-btn" onClick={this.editDevice}>Edit</button>
                </div>
            </div>
        );
    }
}

export default DeviceLookUp;
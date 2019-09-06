import React from 'react';
import Axios from "axios";

class TapeEntry extends React.Component {
    state = {
        carrier_tape: '',
        vendor: '',
        mpr: '',
        vendor_part_number: '',
        width: '',
        pitch: '',
        ao: '',
        bo: '',
        ko: '',
        k1: '',
        pockets_per_22inch_reel: '',
        max_pockets_per_13inch_reel: '',
        max_meters_per_13inch_reel: '',
        desired_pockets_per_13inch_reel: '',
        comments: ''
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    handleSubmit = () => {
        const device = {
            carrier_tape: this.state.carrier_tape ? this.state.carrier_tape : '',
            vendor: this.state.vendor ? this.state.vendor : '',
            mpr: this.state.mpr ? this.state.mpr : '',
            vendor_part_number: this.state.vendor_part_number ? this.state.vendor_part_number : '',
            width: this.state.width ? this.state.width : null,
            pitch: this.state.pitch ? this.state.pitch : null,
            ao: this.state.ao ? this.state.ao : null,
            bo: this.state.bo ? this.state.bo : null,
            ko: this.state.ko ? this.state.ko : null,
            k1: this.state.k1 ? this.state.k1 : null,
            pockets_per_22inch_reel: this.state.pockets_per_22inch_reel ? this.state.pockets_per_22inch_reel : null,
            max_pockets_per_13inch_reel: this.state.max_pockets_per_13inch_reel ? this.state.max_pockets_per_13inch_reel : null,
            max_meters_per_13inch_reel: this.state.max_meters_per_13inch_reel ? this.state.max_meters_per_13inch_reel : null,
            desired_pockets_per_13inch_reel: this.state.desired_pockets_per_13inch_reel ? this.state.desired_pockets_per_13inch_reel : null,
            comments: this.state.comments ? this.state.comments : ''
        }

        Axios.post('/tape/entry', device)
            .then(res => console.log(res.data));
        this.setState({
            carrier_tape: '',
            vendor: '',
            mpr: '',
            vendor_part_number: '',
            width: '',
            pitch: '',
            ao: '',
            bo: '',
            ko: '',
            k1: '',
            pockets_per_22inch_reel: '',
            max_pockets_per_13inch_reel: '',
            max_meters_per_13inch_reel: '',
            desired_pockets_per_13inch_reel: '',
            comments: ''
        })
    }

    render() {
        return (
            <div className="entry-body">
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-large" value={this.state.carrier_tape} name="carrier_tape" placeholder="CARRIER TAPE" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-third" value={this.state.vendor} name="vendor" placeholder="VENDOR" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-small" value={this.state.mpr} name="mpr" placeholder="MPR" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-large" value={this.state.vendor_part_number} name="vendor_part_number" placeholder="VENDOR PART NUMBER" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-xs" value={this.state.width} name="width" placeholder="WIDTH" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-xs" value={this.state.pitch} name="pitch" placeholder="PITCH" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-xs" value={this.state.ao} name="ao" placeholder="A0" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-xs" value={this.state.bo} name="bo" placeholder="B0" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-xs" value={this.state.ko} name="ko" placeholder="K0" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-xs" value={this.state.k1} name="k1" placeholder="K1" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.pockets_per_22inch_reel} name="pockets_per_22inch_reel" placeholder="POCKETS PER 22 INCH REEL" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.max_pockets_per_13inch_reel} name="max_pockets_per_13inch_reel" placeholder="MAX POCKETS PER 13 INCH REEL" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.max_meters_per_13inch_reel} name="max_meters_per_13inch_reel" placeholder="MAX METERS PER 13 INCH REEL" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.desired_pockets_per_13inch_reel} name="desired_pockets_per_13inch_reel" placeholder="DESIRED POCKETS PER 13 INCH REEL" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <textarea className="input-field text-area" value={this.state.comments} name="comments" placeholder="COMMENTS" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="submit-container">
                    <button className="submit" onClick={this.handleSubmit}>
                        Submit
                        </button>
                </div>
            </div>
        );
    }
}

export default TapeEntry;
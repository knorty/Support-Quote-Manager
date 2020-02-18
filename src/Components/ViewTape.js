import React from "react";
import axios from "axios";
import "../css/Entry.css";
import "../css/Form.css";


class ViewTape extends React.Component {
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
        comments: '',
        id: ''
    };

    componentDidMount() {
        console.log(this.props.match.params.carrier_tape);
        axios
            .get(`/carrier_tape/${this.props.match.params.carrier_tape}`)
            .then(response => {
                console.log(response.data)
                if (response.data.length) {
                    this.setState({
                        tape: response.data[0],
                        carrier_tape: response.data[0].carrier_tape,
                        vendor: response.data[0].vendor,
                        mpr: response.data[0].mpr,
                        vendor_part_number: response.data[0].vendor_part_number,
                        width: response.data[0].width,
                        pitch: response.data[0].pitch,
                        ao: response.data[0].ao,
                        bo: response.data[0].bo,
                        ko: response.data[0].ko,
                        k1: response.data[0].k1,
                        pockets_per_22inch_reel: response.data[0].pockets_per_22inch_reel,
                        max_pockets_per_13inch_reel: response.data[0].max_pockets_per_13inch_reel,
                        max_meters_per_13inch_reel: response.data[0].max_meters_per_13inch_reel,
                        desired_pockets_per_13inch_reel: response.data[0].desired_pockets_per_13inch_reel,
                        comments: response.data[0].comments,
                        id: response.data[0].id
                    })
                }
            })
            .catch(console.error);
    }

    handleEdit = () => {
        this.props.history.push(`/edit_tape/${this.state.carrier_tape}`)
    }

    render() {
        return (
            <div className="entry">
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
                    <div className="edit-btn-container">
                        <button className="edit-btn" onClick={this.handleEdit}>Edit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewTape;
import React from "react";
import axios from "axios";
import BackArrow from "./icons/left-arrow.svg";
import "./css/Entry.css";
import "./css/Form.css";
import MenuIcon from "./icons/menu-btn.svg";

class EditTape extends React.Component {
    state = {
        menu: false,
        deviceSelected: 'selected',
        tapeSelected: 'un-selected',

        tape: null,
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
                        comments: response.data[0].comments
                    })
                }
            })
            .catch(console.error);
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

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    handleSave = () => {
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

        axios.put('/tape_update', device)
            .then(res => console.log(res.data))
            .then(axios.get(`/carrier_tape/${this.props.match.params.carrier_tape}`))
    }

    render() {
        return (
            <div className="entry">
                <div className="entry-header">
                    <img className="back-arrow" src={BackArrow} alt="Back Arrow" onClick={this.goToSearch} />
                    <div className="entry-page-title">
                        Edit Tape
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
                        <button className="submit" onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTape;
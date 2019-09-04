import React from 'react';
import Axios from "axios";

class DeviceEntry extends React.Component {
    state = {
        mpn: '',
        package_type: '',
        device_ao: '',
        device_bo: '',
        device_ko: '',
        customer: '',
        contact: '',
        date_quoted: '',
        quote_eau: '',
        quote_number: '',
        min_price: '',
        tr_unit_pricing: '',
        nre: '',
        email_subject: '',
        notes: ''
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    handleSubmit = () => {
        const device = {
            mpn: this.state.mpn ? this.state.mpn : '',
            package_type: this.state.package_type ? this.state.package_type : '',
            device_ao: this.state.device_ao ? this.state.device_ao : null,
            device_bo: this.state.device_bo ? this.state.device_bo : null,
            device_ko: this.state.device_ko ? this.state.device_ko : null,
            customer: this.state.customer ? this.state.customer : '',
            contact: this.state.contact ? this.state.contact : '',
            date_quoted: this.state.date_quoted ? this.state.date_quoted : '2000-01-01',
            quote_eau: this.state.quote_eau ? this.state.quote_eau : null,
            quote_number: this.state.quote_number ? this.state.quote_number : null,
            min_price: this.state.min_price ? this.state.min_price : null,
            tr_unit_pricing: this.state.tr_unit_pricing ? this.state.tr_unit_pricing : null,
            nre: this.state.nre ? this.state.nre : null,
            email_subject: this.state.email_subject ? this.state.email_subject : '',
            notes: this.state.notes ? this.state.notes : ''
        }

        Axios.post('http://localhost:8001/device/entry', device)
            .then(res => console.log(res.data));
        this.setState({
            mpn: '',
            package_type: '',
            device_ao: '',
            device_bo: '',
            device_ko: '',
            customer: '',
            contact: '',
            date_quoted: '',
            quote_eau: '',
            quote_number: '',
            min_price: '',
            tr_unit_pricing: '',
            nre: '',
            email_subject: '',
            notes: '',
        })
    }

    render() {
        return (
            <div className="entry-body">
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-large" value={this.state.mpn} name="mpn" placeholder="MPN" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-large" value={this.state.package_type} name="package_type" placeholder="Package Type" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-small" value={this.state.device_ao} name="device_ao" placeholder="A0" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-small" value={this.state.device_bo} name="device_bo" placeholder="B0" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-small" value={this.state.device_ko} name="device_ko" placeholder="K0" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.customer} name="customer" placeholder="Customer" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.contact} name="contact" placeholder="Contact" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-large" value={this.state.date_quoted} name="date_quoted" placeholder="Date Quoted" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.quote_eau} name="quote_eau" placeholder="Quote EAU" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-medium" value={this.state.quote_number} name="quote_number" placeholder="Quote Number" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-small" value={this.state.min_price} name="min_price" placeholder="Min Price" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-small" value={this.state.tr_unit_pricing} name="tr_unit_pricing" placeholder="Unit Price" type="text" onChange={this.handleInput} />
                    </div>
                    <div className="input-container">
                        <input className="input-field input-small" value={this.state.nre} name="nre" placeholder="NRE" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <input className="input-field input-large" value={this.state.email_subject} name="email_subject" placeholder="Email Subject" type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className="entry-line">
                    <div className="input-container">
                        <textarea className="input-field text-area" value={this.state.notes} name="notes" placeholder="Notes" type="text" onChange={this.handleInput} />
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

export default DeviceEntry;



import React from "react";
import axios from "axios";

class EditDevice extends React.Component {
    state = {
        device: null,
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

    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    componentDidMount() {
        axios
            .get(`/devices/${this.props.match.params.mpn}`)
            .then(response => {
                console.log(response.data[0])
                if (response.data.length) {
                    this.setState({
                        device: response.data[0],
                        mpn: response.data[0].mpn,
                        package_type: response.data[0].package_type,
                        device_ao: response.data[0].device_ao,
                        device_bo: response.data[0].device_bo,
                        device_ko: response.data[0].device_ko,
                        customer: response.data[0].customer,
                        contact: response.data[0].contact,
                        date_quoted: response.data[0].date_quoted,
                        quote_eau: response.data[0].quote_eau,
                        quote_number: response.data[0].quote_number,
                        min_price: response.data[0].min_price,
                        tr_unit_pricing: response.data[0].tr_unit_pricing,
                        nre: response.data[0].nre,
                        email_subject: response.data[0].email_subject,
                        notes: response.data[0].notes
                    })
                }
            })
            .catch(console.error);
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

export default EditDevice;
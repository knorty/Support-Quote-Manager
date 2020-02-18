import React from "react";
import axios from "axios";
import "../css/View.css";

class EditDevice extends React.Component {
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
        notes: '',
        id: ''

    };

    componentDidMount() {
        console.log(this.props.match.params.mpn);
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
                        notes: response.data[0].notes,
                        id: response.data[0].id
                    })
                }
            })
            .catch(console.error);
    }

    handleEdit = () => {
        this.props.history.push(`/edit_device/${this.state.mpn}`)
    }

    render() {
        console.log("view device", this.state.mpn)
        return (
            <div className="view">
                <div className="view-header">
                    <div className="view-page-title">
                        {this.state.mpn}
                    </div>
                </div>
                <div className="view-body">
                    <div className="view-info-container">
                        <div className="view-line-title">
                            MPN
                        </div>
                        <div className="view-line">
                            {this.state.mpn}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Package Type
                        </div>
                        <div className="view-line">
                            {this.state.package_type}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            A0
                        </div>
                        <div className="view-line">
                            {this.state.device_ao}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            B0
                        </div>
                        <div className="view-line">
                            {this.state.device_bo}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            K0
                        </div>
                        <div className="view-line">
                            {this.state.device_ko}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Customer
                        </div>
                        <div className="view-line">
                            {this.state.customer}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Contact
                        </div>
                        <div className="view-line">
                            {this.state.contact}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Date Quoted
                        </div>
                        <div className="view-line">
                            {this.state.date_quoted}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Quote EAU
                        </div>
                        <div className="view-line">
                            {this.state.quote_eau}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Quote Number
                        </div>
                        <div className="view-line">
                            {this.state.quote_number}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Minimum Price
                        </div>
                        <div className="view-line">
                            {this.state.min_price}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            T/R Unit Pricing
                        </div>
                        <div className="view-line">
                            {this.state.tr_unit_pricing}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            NRE
                        </div>
                        <div className="view-line">
                            {this.state.nre}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Email Subject
                        </div>
                        <div className="view-line">
                            {this.state.email_subject}
                        </div>
                    </div>
                    <div className="view-info-container">
                        <div className="view-line-title">
                            Notes
                        </div>
                        <div className="view-line">
                            {this.state.notes}
                        </div>
                    </div>

                </div>
                <div className="edit-btn-container">
                    <button className="edit-btn" onClick={this.handleEdit}>Edit</button>
                </div>
            </div>
        );
    }
}

export default EditDevice;
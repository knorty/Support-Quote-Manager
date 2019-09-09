import React from 'react';

class TapeLookUp extends React.Component {

  editTape = () => {
    console.log(this.props.carrier_tape);
    this.props.history.push(`/edit_tape/${this.props.carrier_tape}`)
  }

  render() {
    return (
      <div className="results" key={this.props.index}>
        <div className="info-item">
          <div className="info-name">
            Carrier Tape
                </div>
          <div className="info">
            {this.props.carrier_tape}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">
            Vendor
                </div>
          <div className="info">
            {this.props.vendor}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">
            Pitch
                </div>
          <div className="info">
            {this.props.pitch}
          </div>
        </div>
        <div className="dim">
          <div className="info-name">
            A0
                </div>
          <div className="info">
            {this.props.ao}
          </div>
        </div>
        <div className="dim">
          <div className="info-name">
            B0
                </div>
          <div className="info">
            {this.props.bo}
          </div>
        </div>
        <div className="dim">
          <div className="info-name">
            K0
                </div>
          <div className="info">
            {this.props.ko}
          </div>
        </div>
        <div className="info-item">
          <button className="big-btn" onClick={this.editTape}>Edit</button>
        </div>
      </div>
    );
  }
}

export default TapeLookUp;


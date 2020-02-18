import React from 'react';

class TapeLookUp extends React.Component {

  viewTape = () => {
    this.props.history.push(`/view/tape/${this.props.carrier_tape}`)
  }

  editTape = () => {
    console.log(this.props.carrier_tape);

    this.props.history.push(`/edit_tape/${this.props.carrier_tape}`)
  }

  render() {
    return (
      <div className="results" key={this.props.index}>
        <div className="info-item">
          <div className="info">
            {this.props.carrier_tape}
          </div>
        </div>
        <div className="info-item">
          <button className="big-btn" onClick={this.viewTape}>View</button>
          <button className="big-btn" onClick={this.editTape}>Edit</button>
        </div>
      </div>
    );
  }
}

export default TapeLookUp;


import React from 'react';
import DatePicker from 'react-modal-datepicker';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      isOpen: false
    };

    this.openPicker = this.openPicker.bind(this);
    this.closePicker = this.closePicker.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }

  openPicker() {
    this.setState({
      isOpen: true
    });
  }

  closePicker() {
    this.setState({
      isOpen: false
    });
  }

  selectDate(date) {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    return (
      <div>
        <h2>React Modal DatePicker</h2>
        <button onClick={this.openPicker.bind(null)}>Open Picker</button>
        <DatePicker
          isOpen={this.state.isOpen}
          selectedDate={this.state.selectedDate}
          handleClosePicker={this.closePicker}
          handleSelectDate={this.selectDate} />
      </div>
    );
  }
}

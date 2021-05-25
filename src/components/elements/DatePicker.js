import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Button from "./Button";
import { Context } from "../../store/appContext";

export default class DatePicker extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  numberOfDays() {
    var differenceInTime = this.state.to - this.state.from;
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays + 1;
  }
  
  static contextType = Context;
  

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const { store, actions } = this.context;
    

    return (
      <div className="RangeExample">
        <p>
          {/*!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
          ${to.toLocaleDateString()}`*/}
          Duración del viaje
          
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <br />
         {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              Reastaurar
            </button>
          )}
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
        <br />
        <Button tag="a" color="primary" wideMobile onClick={() => {actions.changeVisibility(4, true);  actions.updateTravelData("duracion", this.numberOfDays())}}>
          Actualizar
        </Button>
      </div>
    
    );
  }
}
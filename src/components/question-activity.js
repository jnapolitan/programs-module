import React, { Component } from "react";
import questionActivityStyles from "../styles/question-activity.module.css";

export default class QuestoinActivity extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    localStorage.setItem(this.props.localStorageKey, e.target.value);
    this.forceUpdate();
  }

  render() {
    const { activity, localStorageKey } = this.props;
    const localStorageVal = localStorage.getItem(localStorageKey);

    const options = activity.options.map((option, idx) => (
      <li key={`option-${idx}`}>
        <input 
          type="radio" 
          value={`${option}`} 
          name="radio"  
          id={`radio${idx}`}
          onClick={this.handleClick}
          defaultChecked={localStorageVal === option}
        />
        <label 
          className={questionActivityStyles.option} 
          htmlFor={`radio${idx}`}
        >
          {option}
        </label>
      </li>
    ))

    return (
      <>
        <h4 className={questionActivityStyles.prompt}>{activity.prompt}</h4>
        <ul className={questionActivityStyles.options}>
          { options }
        </ul>
      </>
    )
  }
}
import { Component } from 'react';

//Імпорт компонентів
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClicked = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return total ? positivePercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <div style={{ margin: '20px' }}>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onBtnClicked}
        />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

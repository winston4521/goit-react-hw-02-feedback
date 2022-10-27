import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedbacks() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbacks() {
    const totalFeedbacks = this.countTotalFeedbacks();
    const goodEl = this.state.good;
    return Math.round((goodEl * 100) / totalFeedbacks);
  }

  onLeaveFeedback(e) {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
    
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedbacks();
    const positivePercentage = this.countPositiveFeedbacks();

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback.bind(this)}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}

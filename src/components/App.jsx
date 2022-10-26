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
    const gooEl = this.state.good;
    return Math.round((gooEl * 100) / totalFeedbacks);
  }

  onLeaveFeedback(e) {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  }

  render() {
    const {
      onLeaveFeedback,
      countTotalFeedbacks,
      countPositiveFeedbacks,
      state,
    } = this;
    const { good, neutral, bad } = state;

    const total = countTotalFeedbacks.call(this);

    const positive = countPositiveFeedbacks.call(this);

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback.bind(this)}
          />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}

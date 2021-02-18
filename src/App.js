import React, { Component } from 'react';
import Section from 'Components/Section/Section';
import Statistics from 'Components/Statistics/Statistics';
import FeedbackOptions from 'Components/FeedbackOptions/FeedbackOptions';
import Notification from 'Components/Notification/Notification';
import Header from 'Components/Header/Header';

import s from 'App.module.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(state => {
      return { [name]: state[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.wrapper}>
        <Header />
        <main>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </main>
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;

    total !== 0 &&
      (positiveFeedbackPercentage = Math.round(
        (Number(good) / Number(total)) * 100
      ));
    return positiveFeedbackPercentage;
  };

  const percentage = countPositiveFeedbackPercentage();
  
  const onLeaveFeedback = event => {  
    switch (event.target.name) {
      case 'good': setGood(prevGood => prevGood + 1);
        break;
      
      case 'neutral': setNeutral(prevNeutal => prevNeutal + 1);
        break;
      
      case 'bad': setBad(prevBad => prevBad + 1);
        break;
      
      default: return;
    }
  };

  const options = ['good', 'neutral', 'bad'];

    return (
      <div className={s.Feedback__leave}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {total > 0 && (
          <div>
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={percentage}
              />
            </Section>
          </div>
        )}
        {total === 0 && (
          <div>
            <Notification message="There is no feedback!"/>
          </div>
        )}
      </div>
    );
}

export default App;

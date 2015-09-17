import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div className={styles.masthead}>
          <div className="container">
            <h1>React Redux Survey Voter</h1>

            <h2>All the modern best practices in one example.</h2>
            <h3>Swipe or click to vote an item up/down.</h3>

            <p className={styles.humility}>
              Forked from <a className={styles.github} href="https://github.com/erikras/react-redux-universal-hot-example" target="_blank">react-redux-universal-hot-example</a>
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <Link to="/survey-voter" className="btn btn-default"> Try it!</Link>
          </div>
        </div>
      </div>
    );
  }
}

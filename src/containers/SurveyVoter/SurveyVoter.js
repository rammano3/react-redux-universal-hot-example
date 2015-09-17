import React, {Component, PropTypes} from 'react';
import DocumentMeta from 'react-document-meta';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as itemActions from 'redux/modules/items';
import {isLoaded, load as loadItems, vote} from 'redux/modules/items';
import {SwipeVoter} from 'components';

@connect(
  state => ({
    items: state.items.data,
    error: state.items.error,
    votes: state.items.votes
  }),
  dispatch => ({
    ...bindActionCreators({
      ...itemActions
    }, dispatch)
  })
)
export default class SurveyVoter extends Component {
  static propTypes = {
    items: PropTypes.array,
    error: PropTypes.string,
    vote: PropTypes.func.isRequired
  }
  static fetchData(store) {
    if (!isLoaded(store.getState())) {
      return store.dispatch(loadItems());
    }
  }
  handleVote(data) {
    console.log('Vote submitted! ' + JSON.stringify(data), 'vote fn', vote);
    vote(data);
  }
  render() {
    const {items, error} = this.props;
    return (
      <div className="container">
        <h2 className="center-align">Survey Voter</h2>
        <DocumentMeta title="Survey Voter: Vote yes/no on items shown"/>
        {error &&
        <div className="alert alert-danger" role="alert">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          {' '}
          {error}
        </div>}
        {items && items.length &&
        <SwipeVoter items={items} onVote={::this.handleVote}/>
        }
      </div>
    );
  }
}

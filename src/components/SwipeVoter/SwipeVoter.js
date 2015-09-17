import React, {Component, PropTypes} from 'react';
import ReactSwipe from 'react-swipe';

// TODO: Load (n)buffer images into state to be displayed before or after current slide
//       On each change, store to state with the item so we can replay each choice w/ dev-tools
//       Tests!
export default class SwipeVoter extends Component {
  static propTypes = {
    items: PropTypes.array,
    onVote: PropTypes.func
  }
  vote(isYes) {
    console.log('vote ', this.refs.SwipeVoter.swipe.getPos(), this.refs.SwipeVoter.swipe.getNumSlides());
    isYes ? this.refs.SwipeVoter.swipe.next() : this.refs.SwipeVoter.swipe.prev();
    this.props.onVote(isYes);
  }
  render() {
    const {items} = this.props;
    return (
      <ReactSwipe ref="SwipeVoter" key={items.length}>
        {
          items.map((item) =>
            <div key={item.id}>
              <div className="card" >
                <div className="card-image">
                  <img src={item.url} />
                  <span className="card-title">{item.name}</span>
                </div>
                <div className="card-action">
                  <div className="row">
                    <div className="col s12">
                      <a className="btn-floating btn-large waves-effect waves-light red"
                         onClick={() => this.vote(false)}>
                        <i className="material-icons">thumb_down</i>
                      </a>
                      <a className="btn-floating btn-large waves-effect waves-light green"
                         onClick={() => this.vote(true)}>
                        <i className="material-icons">thumb_up</i>
                      </a>
                    </div>
                  </div>
                  <i>or Swipe to vote</i>
                </div>
              </div>
            </div>
          )
        }
      </ReactSwipe>
    );
  }
}

import {loadVotes} from './loadVotes';

export default function vote(req) {
  console.log('/API/actions/item/vote');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const votes = loadVotes(req);
      const vote = req.body;
      //alter votes with vote
      resolve(vote);
    }, 2000); // simulate async db write
  });
}

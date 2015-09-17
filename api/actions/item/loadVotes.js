const initialVotes = {
  yes: [],
  no: []
};

export function getVotes(req) {
  console.log('getVotes');
  let votes = req.session.items;
  if (!votes) {
    votes = initialVotes;
    req.session.votes = votes;
  }
  return votes;
}

export default function loadVotes(req, params) {
  console.log('loadVotes');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(gegetVotestItems(req));
    }, 1000); // simulate async load
  });
}

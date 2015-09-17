const initialItems = [
  {id: 1, name: 'Zib Zab', url: 'http://lorempixel.com/output/abstract-q-c-1024-768-4.jpg'},
  {id: 2, name: 'Interesting Title', url: 'http://lorempixel.com/output/abstract-q-c-1024-768-7.jpg'},
  {id: 3, name: 'Hoppy Drama', url: 'http://lorempixel.com/output/abstract-q-c-1024-768-5.jpg'},
  {id: 4, name: 'Blissful Bleep', url: 'http://lorempixel.com/output/abstract-q-c-1024-768-3.jpg'}
];

export function getItems(req) {
  let items = req.session.items;
  if (!items) {
    items = initialItems;
    req.session.items = items;
  }
  return items;
}

export default function load(req, params) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      if (Math.floor(Math.random() * 3) === 0) {
        reject('Item load fails 33% of the time. You were unlucky.');
      } else {
        resolve(getItems(req));
      }
    }, 1000); // simulate async load
  });
}

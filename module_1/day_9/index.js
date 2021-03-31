// const words = {
//   index : 0,
//   symbols: ['Ta', 'Za', 'Sho', '?']
// };
//
//
// const smiles = {
//   index: 0,
//   symbols: ['😶', '😐', '😉', '😗', '😙', '😚']
// };
//
// let animationIndex = 0;
// const animations = [words, smiles];
//
// setInterval(() => {
//   if (animationIndex === animations.length) {
//     animationIndex = 0;
//   }
//
//   const spinner = animations[animationIndex];
//
//   console.clear();
//   console.log(spinner.symbols[spinner.index]);
//
//   spinner.index++;
//
//   if(spinner.index === spinner.symbols.length){
//     spinner.index = 0;
//     animationIndex++;
//   }
// }, 1000);

// const prop = {
//   index : 0,
//   id : 0,
//   symbols: ['▷', '▷', '▷', '▷', '▷', '▷', '▷']
// };
//
//
// prop.id = setInterval(_ => {
//   if(_.index === _.symbols.length){
//     _.index = 0;
//   }
//
//   const copy = [..._.symbols];
//   copy.splice(0, 1, '▷');
//   copy.splice(_.index, 1, '▶');
//   const view = copy.join('');
//   console.clear();
//   console.log(view);
//
//   _.index++;
//
// }, 1000, prop);

// const prop = {
//   index : 3,
//   id : 0,
//   symbols: ['(', '_', '_', '_', '_', '_', ')'],
//   rightDirection: true
// };
//
//
// prop.id = setInterval(_ => {
//   if(_.index === _.symbols.length - 1){
//     _.index = _.symbols.length - 2;
//     _.rightDirection = false;
//   }
//
//   if (_.index === 0) {
//     _.index = 1;
//     _.rightDirection = true;
//   }
//
//
//   const copy = [..._.symbols];
//   // copy.splice(0, 1, '◁▷');
//   copy.splice(_.index, 1, 'o');
//   const view = copy.join('');
//   console.clear();
//   console.log(view);
//
//   _.index += _.rightDirection ? 1 : -1;
//
// }, 500, prop);

const prop = {
  index : 0,
  id : 0,
  symbols: ['◁▷', '◁▷', '◁▷', '◁▷', '◁▷', '◁▷', '◁▷'],
  rightDirection: true
};


prop.id = setInterval(_ => {
  if(_.index === _.symbols.length){
    _.index = _.symbols.length - 2;
    _.rightDirection = false;
  }

  if (_.index < 0) {
    _.index = 1;
    _.rightDirection = true;
  }


  const copy = [..._.symbols];
  // copy.splice(0, 1, '◁▷');
  copy.splice(_.index, 1, '◀▶');
  const view = copy.join('');
  console.clear();
  console.log(view);

  _.index += _.rightDirection ? 1 : -1;

}, 500, prop);

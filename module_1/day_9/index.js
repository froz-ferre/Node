const words = {
  index : 0,
  symbols: ['Ta', 'Za', 'Sho', '?']
};


const smiles = {
  index: 0,
  symbols: ['😶', '😐', '😉', '😗', '😙', '😚']
};

let animationIndex = 0;
const animations = [words, smiles];

setInterval(() => {
  if (animationIndex === animations.length) {
    animationIndex = 0;
  }

  const spinner = animations[animationIndex];

  if(spinner.index === spinner.symbols.length){
    animationIndex++;
  }

  console.clear();
  console.log(spinner.symbols[spinner.index]);

  spinner.index++;

}, 1000);

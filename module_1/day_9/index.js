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

  console.clear();
  console.log(spinner.symbols[spinner.index]);

  spinner.index++;

  if(spinner.index === spinner.symbols.length){
    spinner.index = 0;
    animationIndex++;
  }
}, 1000);

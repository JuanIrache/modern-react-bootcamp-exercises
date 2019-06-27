import chroma from 'chroma-js';

function generatePalette(starterPalette) {
  //Clone starterPalette but override colors
  let newPalette = { ...starterPalette, colors: {} };
  //Loop original colors
  starterPalette.colors.forEach(c => {
    //Loop from -4 (darkest) to +4 (brigthest)
    for (let i = -4; i <= 4; i++) {
      //Label shades 0 through 8
      const shade = (i + 4).toString();
      //Produce darker/brighter color with chroma. Multiply i by (3/4) to avoid black and white
      const newColor = chroma(c.color).brighten(i * (3 / 4));
      //Create string for each format
      const newColorObj = {
        id: `${c.name} ${shade}`,
        hex: newColor.hex(),
        rgb: newColor.css(),
        rgba: newColor.css('rgba')
      };
      //Create array inside objects if not present
      newPalette.colors[shade] = newPalette.colors[shade] || [];
      //Push the new color
      newPalette.colors[shade].push(newColorObj);
    }
  });
  return newPalette;
}

export { generatePalette };

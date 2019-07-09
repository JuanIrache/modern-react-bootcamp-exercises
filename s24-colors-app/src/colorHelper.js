import chroma from 'chroma-js';

function generatePalette(starterPalette) {
  //Clone starterPalette but override colors
  let newPalette = { ...starterPalette, colors: [] };
  //Loop original colors
  starterPalette.colors.forEach(c => {
    //Loop from -5 (darkest) to +5 (brigthest)
    for (let i = -5; i <= 5; i++) {
      //Label shades 0 through 8
      const shadeName = (i + 5).toString();
      //Read original color luminance
      const luma = chroma(c.color).luminance();
      let newLuma;
      //Find a luminance between almost black and the original luma
      if (i < 0) newLuma = luma - (luma / 6) * -i;
      //Find a luminance between almost white and the original luma
      else newLuma = luma + ((1 - luma) / 6) * i;
      //Create a new color with such luminance
      const newColor = chroma(c.color).luminance(newLuma, 'lab');
      //Create string for each format
      const newColorObj = {
        id: `${c.name}`,
        key: `${c.name} ${shadeName}`,
        hex: newColor.hex(),
        rgb: newColor.css(),
        rgba: newColor.css('rgba')
      };
      //Create array inside objects if not present
      newPalette.colors[shadeName] = newPalette.colors[shadeName] || [];
      //Push the new color
      newPalette.colors[shadeName].push(newColorObj);
    }
  });
  return newPalette;
}

export { generatePalette };

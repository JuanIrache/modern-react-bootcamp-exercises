import chroma from 'chroma-js';
const namer = require('color-namer');

function smartColorGenerator(prevColor) {
  let newColor;
  let newName;
  if (prevColor) {
    //Helper functions
    const getComponent = (col, comp) => chroma(col).get('hsl.' + comp);
    const randomDir = num => (Math.random() > 0.5 ? num : -num);
    const modColor = (col, comp, val) => chroma(col).set('hsl.' + comp, val);
    const colorStr = col => `rgb(${col.rgb().join(',')})`;
    //Possible color manipulation
    const rules = [
      //Rule 1, adjacent hue
      ({ color }) => {
        const preHue = getComponent(color, 'h');
        let hue = preHue + randomDir(10);
        hue = hue % 255;
        const newColor = modColor(color, 'h', hue);
        return colorStr(newColor);
      },
      //Rule 2, shade of same hue
      ({ color }) => {
        const prevLuma = getComponent(color, 'l');
        let luma;
        do {
          luma = prevLuma + randomDir(0.2);
        } while (luma < 0.1 || luma > 0.9);
        const newColor = modColor(color, 'l', luma);
        return colorStr(newColor);
      },
      //Rule 3, triadic (turn a third in the color wheel)
      ({ color }) => {
        const preHue = getComponent(color, 'h');
        let hue = preHue + randomDir(Math.floor(256 / 3));
        hue = hue % 255;
        const newColor = modColor(color, 'h', hue);
        return colorStr(newColor);
      },
      //Rule 4, complementary (opposite side of the color wheel)
      ({ color }) => {
        const preHue = getComponent(color, 'h');
        let hue = preHue + randomDir(Math.floor(256 / 2));
        hue = hue % 255;
        const newColor = modColor(color, 'h', hue);
        return colorStr(newColor);
      },
      //Rule 5, tweak saturation
      ({ color }) => {
        const prevSat = getComponent(color, 's');
        let sat;
        do {
          sat = prevSat + randomDir(0.3);
        } while (sat < 0.1 || sat > 0.9);
        const newColor = modColor(color, 's', sat);
        return colorStr(newColor);
      }
    ];
    // pick random rule each time
    const ruleIndex = Math.floor(Math.random() * rules.length);
    newColor = rules[ruleIndex](prevColor);
  } else {
    //If no previous color, return completely random
    const random = n => Math.floor(Math.random() * n);
    newColor = `rgb(${random(256)},${random(256)},${random(256)})`;
  }

  //Pick the name that defines the color best
  const nameOptions = namer(newColor);
  newName = Object.keys(nameOptions)
    .map(k => nameOptions[k][0])
    .sort((a, b) => a.distance - b.distance)[0].name;

  return { color: newColor, name: newName };
}

export default smartColorGenerator;

import chroma from 'chroma-js';
const namer = require('color-namer');

function smartColorGenerator(prevColor) {
  //Helper functions
  const getComponent = (col, comp) => chroma(col).get('hsl.' + comp);
  const randomDir = num => (Math.random() > 0.5 ? num : -num);
  const modColor = (col, comp, val) => chroma(col).set('hsl.' + comp, val);
  const colorStr = col => `rgb(${col.rgb().join(',')})`;
  const random = n => Math.floor(Math.random() * n);
  const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  let newColor;
  let newName;
  if (prevColor) {
    //Possible color manipulation
    const rules = [
      //Rule 1, change hue
      ({ color }) => {
        const preHue = getComponent(color, 'h');
        //3 inner possible rules;
        //1) Change color slightly
        //2) Change color a third of the color wheel
        //3) Change color half the color wheel
        const innerRules = [10, 255 / 3, 255 / 2];
        let hue = preHue + randomDir(pickRandom(innerRules));
        hue = hue % 255;
        const newColor = modColor(color, 'h', hue);
        return colorStr(newColor);
      },
      //Rule 2, change light
      ({ color }) => {
        const prevLuma = getComponent(color, 'l');
        let luma;
        do {
          luma = prevLuma + randomDir(0.15);
        } while (luma < 0.2 || luma > 0.95);
        const newColor = modColor(color, 'l', luma);
        return colorStr(newColor);
      },
      //Rule 3, change saturation
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
    newColor = pickRandom(rules)(prevColor);
  } else {
    //If no previous color, return completely random
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

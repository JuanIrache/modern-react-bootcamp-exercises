import chroma from 'chroma-js';

export const lightColor = col => chroma(col).luminance() > 0.75;
export const darkColor = col => chroma(col).luminance() < 0.3;

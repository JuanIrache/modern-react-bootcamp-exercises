import React from 'react';
import { Emoji } from 'emoji-mart';

export default function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="SingleColorPalette-footer">
      {paletteName}{' '}
      <span className="SingleColorPalette-footer-emoji">
        <Emoji emoji={emoji} set="google" size={20} />
      </span>
    </footer>
  );
}

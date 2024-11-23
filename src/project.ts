import { makeProject } from '@motion-canvas/core';
import './global.css';

import example from './scenes/example?scene';
import intro from './scenes/intro?scene';
import errors from './scenes/errors?scene';
import TestsTitle from './scenes/TestsTitle?scene';
import Title from './scenes/Title?scene';
import focusSmall from './scenes/focusSmall?scene';
import ChapterTitle from './scenes/ChapterTitle?scene';
import outro from './scenes/outro?scene';

// audio
import final from './audio/final.mp3';

export default makeProject({
  scenes: [intro, errors, ChapterTitle, Title, focusSmall, TestsTitle, outro],
  audio: [final],
});

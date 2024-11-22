import { makeProject } from '@motion-canvas/core';
import './global.css';

import example from './scenes/example?scene';
import intro from './scenes/intro?scene';
import errors from './scenes/errors?scene';
import TestsTitle from './scenes/TestsTitle?scene';
import Title from './scenes/Title?scene';
import focusSmall from './scenes/focusSmall?scene';
import ChapterTitle from './scenes/ChapterTitle?scene';

// audio
import description from './audio/description.mp3';
import introduction from './audio/intro.mp3';

export default makeProject({
  scenes: [intro, errors, ChapterTitle, Title, TestsTitle, focusSmall],
  audio: [introduction],
});

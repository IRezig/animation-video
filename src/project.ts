import { makeProject } from "@motion-canvas/core";

import example from "./scenes/example?scene";
import intro from "./scenes/intro?scene";
import "./global.css";
import errors from "./scenes/errors?scene";
import TestsTitle from "./scenes/TestsTitle?scene";
import Title from "./scenes/Title?scene";
import focusSmall from "./scenes/focusSmall?scene";
import description from "./audio/description.mp3";
export default makeProject({
  scenes: [focusSmall],
  audio: [description],
});

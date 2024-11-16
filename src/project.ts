import { makeProject } from "@motion-canvas/core";

import example from "./scenes/example?scene";
import intro from "./scenes/intro?scene";
import "./global.css";
import errors from "./scenes/errors?scene";
import TestsTitle from "./scenes/TestsTitle?scene";

export default makeProject({
  scenes: [TestsTitle],
});

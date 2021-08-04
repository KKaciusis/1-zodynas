import { Dictionary } from "./func.js";
import { DictionaryOutput } from "./output.js";

const dictionary = new Dictionary (".dictionary");
dictionary.init();

const dictionaryOutput = new DictionaryOutput (".output")
dictionaryOutput.init();
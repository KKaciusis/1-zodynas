import { Dictionary } from "./Inputfield.js";
import { DictionaryOutput } from "./Output.js";

const dictionary = new Dictionary (".dictionary");
dictionary.init();

const dictionaryOutput = new DictionaryOutput (".dictionary")
dictionary.saveButtonCallback = dictionaryOutput.createRow.bind(dictionaryOutput);
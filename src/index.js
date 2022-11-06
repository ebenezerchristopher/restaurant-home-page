import appender from "./appender.js";
import {header} from "./header.js";
import "./index.css";

let main = document.createElement("main");

appender(header, main);
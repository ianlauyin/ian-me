import {render} from "@solidjs/web";
import {Profile} from "./Profile";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./index.css";

const root = document.getElementById("root");
export const dispose = root ? render(() => <Profile />, root) : undefined;

import { render } from "solid-js/web";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Profile from "./module/profile";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  render(() => <Profile />, root);
}

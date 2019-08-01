import { createStore } from "redux";
import setting from "./modules/setting";

const configure = () => createStore(setting);

export default configure;

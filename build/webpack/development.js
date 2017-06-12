import {merge} from "lodash";
import base from "./base";

export default merge({}, base, {
  devtool: "source-map"
});

import {merge} from "lodash";
import webpack from "webpack";
import base from "./base";

export default merge({}, base, {
  devtool: "source-map",

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});

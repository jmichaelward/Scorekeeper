import gulp from "gulp";
import BrowserSync from "browser-sync";
import {compiler, handleWebpackResults} from "../webpack/compiler";

const browserSync = BrowserSync.create();
const args = global.__args;

gulp.task("dev", ["build"], ()=> {
  compiler.watch({}, handleWebpackResults(true));
  gulp.watch(`${__pkg._assetsPath}/src/scss/**/*.scss`, ["styles"]);
  gulp.watch(`${__pkg._assetsPath}/src/img/**/*`, ["img"]);

  if (args.sync) {
    browserSync.init({
      host: "localhost",
      proxy: __pkg._criticalUrl,
      files: [
        `${__pkg._assetsPath}/dist/js/*.js`,
        `**/*.php`,
       `${__pkg._assetsPath}/dist/css/*.css`
      ]
    });
  }
});

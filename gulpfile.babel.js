import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",
  },
};

export const styles = () => {
  // eslint-disable-next-line prettier/prettier
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));
};

const watchFiles = () => {
  gulp.watch(paths.styles.watch, styles);
};

const dev = gulp.series([styles, watchFiles]);

export default dev;

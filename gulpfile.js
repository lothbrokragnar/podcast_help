const { src, dest, watch, series } = require('gulp');

// Compilar CSS
const sass = require('gulp-sass')(require('sass'));

// Imagenes
const imagemin = require('gulp-imagemin');

async function css() {
    
    src('src/scss/app.scss') // Identificar el archivo principal
        .pipe( sass() ) //Comppilar SASS
        .pipe( dest('build/css') ) //Exportarlo o guardarlo en una ubicacion
}

function dev() {
    watch('src/scss/**/*.scss', css);
}

async function imagenes() {
    src('src/img/**/*')
    .pipe( imagemin({optimizationLvel: 3}) )
    .pipe( dest('build/img'))
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series( imagenes, css, dev );
// Este archivo se PRECOPILA con PREPROS para que genere el archivo minificado MAIN-MIN.JS que es el que consime wordpress
/*
 La configuración de PREPROS para este archivo debe tener activo:
  -. Process Automatically
  -. Create Source Map
  -. Transpile with Babel
  -. Bundle Imports and Requires
  -. Minify-js
  -. Include file white Uploading
*/

import { preLoader } from './modules/general';

$(function () {
  preLoader();
});
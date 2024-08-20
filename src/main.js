"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappedin_js_1 = require("@mappedin/mappedin-js");
require("@mappedin/mappedin-js/lib/index.css");
// See Demo API key Terms and Conditions
// https://developer.mappedin.com/v6/demo-keys-and-maps/
const options = {
    key: '65ca6d27d53f21f234ae6395',
    secret: '0b25fc24d564c644443663d0b4d083605090d349975d0983fc96e06a5b1934dd',
    mapId: '65c0ff7430b94e3fabd5bb8c'
};
async function init() {
    const mapData = await (0, mappedin_js_1.getMapData)(options);
    const mapView = await (0, mappedin_js_1.show3dMap)(document.getElementById('mappedin-map'), mapData);
}
init();

/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/queue-microtask";
exports.ids = ["vendor-chunks/queue-microtask"];
exports.modules = {

/***/ "(rsc)/./node_modules/queue-microtask/index.js":
/*!***********************************************!*\
  !*** ./node_modules/queue-microtask/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ let promise;\nmodule.exports = typeof queueMicrotask === \"function\" ? queueMicrotask.bind( false ? 0 : global) : (cb)=>(promise || (promise = Promise.resolve())).then(cb).catch((err)=>setTimeout(()=>{\n            throw err;\n        }, 0));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcXVldWUtbWljcm90YXNrL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLHNGQUFzRixHQUN0RixJQUFJQTtBQUVKQyxPQUFPQyxPQUFPLEdBQUcsT0FBT0MsbUJBQW1CLGFBQ3ZDQSxlQUFlQyxJQUFJLENBQUMsTUFBa0IsR0FBY0MsQ0FBTUEsR0FBR0MsVUFFN0RDLENBQUFBLEtBQU0sQ0FBQ1AsV0FBWUEsQ0FBQUEsVUFBVVEsUUFBUUMsT0FBTyxFQUFDLENBQUMsRUFDN0NDLElBQUksQ0FBQ0gsSUFDTEksS0FBSyxDQUFDQyxDQUFBQSxNQUFPQyxXQUFXO1lBQVEsTUFBTUQ7UUFBSSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmR1aS1zdHVkaW8vLi9ub2RlX21vZHVsZXMvcXVldWUtbWljcm90YXNrL2luZGV4LmpzPzljMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIHF1ZXVlLW1pY3JvdGFzay4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xubGV0IHByb21pc2VcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgcXVldWVNaWNyb3Rhc2sgPT09ICdmdW5jdGlvbidcbiAgPyBxdWV1ZU1pY3JvdGFzay5iaW5kKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxuICAvLyByZXVzZSByZXNvbHZlZCBwcm9taXNlLCBhbmQgYWxsb2NhdGUgaXQgbGF6aWx5XG4gIDogY2IgPT4gKHByb21pc2UgfHwgKHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKSkpXG4gICAgLnRoZW4oY2IpXG4gICAgLmNhdGNoKGVyciA9PiBzZXRUaW1lb3V0KCgpID0+IHsgdGhyb3cgZXJyIH0sIDApKVxuIl0sIm5hbWVzIjpbInByb21pc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwicXVldWVNaWNyb3Rhc2siLCJiaW5kIiwid2luZG93IiwiZ2xvYmFsIiwiY2IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJjYXRjaCIsImVyciIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/queue-microtask/index.js\n");

/***/ })

};
;
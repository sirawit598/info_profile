const _0x23058d = _0x9ca0;
(function (_0x293409, _0x3770ec) {
  const _0x22f139 = _0x9ca0,
    _0x125ec4 = _0x293409();
  while (!![]) {
    try {
      const _0x29f74d =
        (parseInt(_0x22f139(0xaf)) / 0x1) * (parseInt(_0x22f139(0xa6)) / 0x2) +
        -parseInt(_0x22f139(0xbb)) / 0x3 +
        (parseInt(_0x22f139(0xb8)) / 0x4) * (-parseInt(_0x22f139(0xa3)) / 0x5) +
        -parseInt(_0x22f139(0xb9)) / 0x6 +
        -parseInt(_0x22f139(0xa7)) / 0x7 +
        (-parseInt(_0x22f139(0xae)) / 0x8) * (parseInt(_0x22f139(0xb1)) / 0x9) +
        parseInt(_0x22f139(0xa9)) / 0xa;
      if (_0x29f74d === _0x3770ec) break;
      else _0x125ec4["push"](_0x125ec4["shift"]());
    } catch (_0x2b7c0f) {
      _0x125ec4["push"](_0x125ec4["shift"]());
    }
  }
})(_0x583f, 0x21a1d);
function _0x583f() {
  const _0x15cfa0 = [
    "6342140qjEpXZ",
    "add",
    "isIntersecting",
    "target",
    "pop",
    "8TlNxJI",
    "1VLMSPQ",
    "ยิงรัวแบบโปร",
    "970227MYIzFD",
    ".typed-text",
    "in-view",
    "querySelector",
    "addEventListener",
    "Line\x20Rangers",
    "join",
    "4vNCCqg",
    "1404978MCYnbf",
    "length",
    "146892zgIACl",
    "textContent",
    "forEach",
    "observe",
    "DOMContentLoaded",
    "random",
    "726545ZwDxFZ",
    "push",
    "ไม่โดนแบน",
    "372496ptmJyy",
    "1025262PNswbz",
    ".about",
  ];
  _0x583f = function () {
    return _0x15cfa0;
  };
  return _0x583f();
}
const typedText = document["querySelector"](_0x23058d(0xb2)),
  cursor = document[_0x23058d(0xb4)](".cursor"),
  phrases = [_0x23058d(0xb6), "ระบบยิงออโต้", _0x23058d(0xb0), _0x23058d(0xa5)];
function _0x9ca0(_0x3fcf2f, _0x2e2bd9) {
  const _0x583f57 = _0x583f();
  return (
    (_0x9ca0 = function (_0x9ca041, _0x1ac137) {
      _0x9ca041 = _0x9ca041 - 0xa2;
      let _0x44d4fb = _0x583f57[_0x9ca041];
      return _0x44d4fb;
    }),
    _0x9ca0(_0x3fcf2f, _0x2e2bd9)
  );
}
let i = 0x0,
  j = 0x0,
  currentPhrase = [],
  isDeleting = ![],
  isEnd = ![];
function loop() {
  const _0x2fbbe2 = _0x23058d;
  (isEnd = ![]), (typedText[_0x2fbbe2(0xbc)] = currentPhrase["join"](""));
  !isDeleting &&
    j <= phrases[i][_0x2fbbe2(0xba)] &&
    (currentPhrase[_0x2fbbe2(0xa4)](phrases[i][j]),
    j++,
    (typedText[_0x2fbbe2(0xbc)] = currentPhrase[_0x2fbbe2(0xb7)]("")));
  isDeleting &&
    j <= phrases[i][_0x2fbbe2(0xba)] &&
    (currentPhrase[_0x2fbbe2(0xad)](),
    j--,
    (typedText["textContent"] = currentPhrase["join"]("")));
  j === phrases[i][_0x2fbbe2(0xba)] && ((isEnd = !![]), (isDeleting = !![]));
  isDeleting &&
    j === 0x0 &&
    ((currentPhrase = []),
    (isDeleting = ![]),
    i++,
    i === phrases[_0x2fbbe2(0xba)] && (i = 0x0));
  const _0x514dd7 = Math["random"]() * (0x50 - 0x32) + 0x32,
    _0x10950c = Math[_0x2fbbe2(0xa2)]() * (0xc8 - 0x64) + 0x64,
    _0x533a1b = isEnd ? 0x3e8 : isDeleting ? _0x514dd7 : _0x10950c;
  setTimeout(loop, _0x533a1b);
}
document[_0x23058d(0xb5)](_0x23058d(0xbf), () => loop());
const observer = new IntersectionObserver(
  (_0xbbd57e) => {
    _0xbbd57e["forEach"]((_0x3e31c3) => {
      const _0x17ff46 = _0x9ca0;
      _0x3e31c3[_0x17ff46(0xab)] &&
        _0x3e31c3[_0x17ff46(0xac)]["classList"][_0x17ff46(0xaa)](
          _0x17ff46(0xb3)
        );
    });
  },
  { threshold: 0.2 }
);
document["querySelectorAll"](_0x23058d(0xa8))[_0x23058d(0xbd)]((_0x4954a4) => {
  const _0x11130d = _0x23058d;
  observer[_0x11130d(0xbe)](_0x4954a4);
});

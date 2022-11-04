// *** 의사 코드!! ***
 
var positionBuffer = [
    0,   0, 0, 0,
    0, 0.5, 0, 0,
  0.7,   0, 0, 0,
];
var attributes = {};
var gl_Position;
 
drawArrays(..., offset, count) {
  var stride = 4;
  var size = 4;
  for (var i = 0; i < count; ++i) {
    // 다음 값 4개를 "positionBuffer"에서 속성 "a_position"으로 복사
    const start = offset + i * stride;
    attributes.a_position = positionBuffer.slice(start, start + size);
    runVertexShader();
    ...
    doSomethingWith_gl_Position();
  }
}
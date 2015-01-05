var Fuga = function() {
  var _result_fuga5 = 0;
};

// 引数なし関数
Fuga.prototype.fuga1 = function() {
  return 0;
};

// 引数あり関数
Fuga.prototype.fuga2 = function(value) {
  return 0;
};

// 引数なしコールバック
Fuga.prototype.fuga3 = function(callback) {
  callback();
};

// 引数ありコールバック
Fuga.prototype.fuga4 = function(callback) {
  callback(0);
};

// 要求応答（応答はfuga5_2）
Fuga.prototype.fuga5_1 = function() {
  // 何かの処理
};

// 応答関数（要求はfuga5_1）
Fuga.prototype.fuga5_2 = function(result) {
  _result_fuga5 = result;
};

// 結果取得関数
Fuga.prototype.getResultFuga5 = function() {
  return _result_fuga5;
};

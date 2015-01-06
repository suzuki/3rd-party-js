var Fuga = function() {
  "use strict";

  var _result_fuga5 = 0;
  _result_fuga5 = 0;

};

// 引数なし関数
Fuga.prototype.fuga1 = function() {
  "use strict";

  return 0;
};

// 引数あり関数
Fuga.prototype.fuga2 = function(value) {
  "use strict";

  value = 1;

  return 0;
};

// 引数なしコールバック
Fuga.prototype.fuga3 = function(callback) {
  "use strict";

  callback();
};

// 引数ありコールバック
Fuga.prototype.fuga4 = function(callback) {
  "use strict";

  callback(0);
};

// 要求応答（応答はfuga5_2）
Fuga.prototype.fuga5_1 = function() {
  "use strict";

  // 何かの処理
};

// 応答関数（要求はfuga5_1）
Fuga.prototype.fuga5_2 = function(result) {
  "use strict";

  var _result_fuga5 = result;

  _result_fuga5 = 1;
};

// 結果取得関数
Fuga.prototype.getResultFuga5 = function() {
  "use strict";

  var _result_fuga5;

  return _result_fuga5;
};

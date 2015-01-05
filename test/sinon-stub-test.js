var fuga;

module("Fugaテスト", {
  setup: function() {
    fuga = new Fuga();
  }
});

test("引数なし関数", function() {
  //var stub = sinon.stub(fuga, "fuga1");
  var stub = this.stub(fuga, "fuga1");
  stub.returns(1);

  ok(fuga.fuga1() == 1, "OK");
});

test("引数あり関数", function() {
  var stub = sinon.stub(fuga, "fuga2");
  stub.withArgs(1).returns(10);
  stub.withArgs(2).returns(20);

  ok(fuga.fuga2(1) == 10, 'ok');
  ok(fuga.fuga2(2) == 20, 'ok');
});

test("引数なしコールバック", function() {
  var stub = sinon.stub(fuga, 'fuga3');
  stub.callsArg(0);

  var result = 0;
  var callbackResult = function() {
    result = 1;
  }

  fuga.fuga3(callbackResult);

  ok(result == 1, 'ok');
});

test("引数ありのコールバック", function() {
  var stub = sinon.stub(fuga, "fuga4");
  stub.callsArgWith(0, 10); // index = 0 のコールバック関数の引数は 10

  var result = 0;
  var callbackResult = function(value) {
    result = value;
  }

  fuga.fuga4(callbackResult);

  ok(result == 10, 'ok');
});

test("別の関数が応答となる関数", function() {
  // 擬似要求処理
  var piyo = function() {
    fuga.fuga5_2(10);
  };

  var stub = sinon.stub(fuga, "fuga5_1", piyo); // fuga5_1 が呼ばれたら piyo を呼ぶように設定

  fuga.fuga5_1();
  ok(fuga.getResultFuga5() == 10, 'ok');
});

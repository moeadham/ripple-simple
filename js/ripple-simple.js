function generateKeys() {
		for (var i = 0; i < 8; i++) {
			sjcl.random.addEntropy(Math.random(), 32, "Math.random()");
		}
		var seed = Base58Utils.encode_base_check(33, sjcl.codec.bytes.fromBits(sjcl.random.randomWords(4)));
		var pub = (new RippleAddress(seed)).getAddress();
		return {
			secret : seed,
			pub : pub
		};
}
function signtx(secret, tx_in) {
	var tx_JSON = JSON.parse(tx_in);
	var tx = new ripple.Transaction();
	tx.tx_json = tx_JSON;
	tx._secret = secret;
	tx.complete();
	var unsigned = tx.serialize().to_hex();
	tx.sign();
	return (tx.serialize().to_hex());
}

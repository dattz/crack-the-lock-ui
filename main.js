$(function() {
	var CIPHERS = new Array();
	CIPHERS[1] = "202cb962ac59075b964b07152d234b70";
	CIPHERS[2] = "250cf8b51c773f3f8dc8b4be867a9a02";
	CIPHERS[3] = "68053af2923e00204c3ca7c6a3150cf7";

	$('button').click(function() {
		var lock_no = $(this).data('lock');
		console.log('lockno: ' + lock_no);
		if (!lock_no) return;

		var val = $('#lock' + lock_no).val();
		console.log(val);
		if (!val || val.length == 0) return;

		if (compareCipher(val, CIPHERS[lock_no])) {
			alert("Answer: " + val + "\nThe answer is CORRECT!");
		} else {
			alert("Answer: " + val + "\nSorry, that's an incorrect answer!");
		}
	});

	function compareCipher(text, encrypted) {
		if (CryptoJS.MD5(text) == encrypted) return true;
		else return false;
	}
});
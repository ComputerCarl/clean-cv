module.exports = function loadScript(src) {
	return new Promise(function (resolve, reject) {
	var s;
	s = document.createElement('script');
	s.src = src;
	s.async = false
	s.onload = resolve(s);
	s.onerror = reject;
	document.head.appendChild(s);
	});
}
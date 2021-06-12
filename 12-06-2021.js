//Parse the text and replace Globally url with corresponding html syntax.
// Supported protocols:
// http
// https
// ftp
// ftps
// file
// smb
function anchorize(text) {
	return text.replace(
		/(http|https|ftp|ftps|file|smb)\S+/gi,
		(m) => `<a href="${m}">${m}</a>`
	);
}

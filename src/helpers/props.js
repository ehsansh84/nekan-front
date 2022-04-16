export const setCookie = (cName, cValue, seconds) => {
	const d = new Date();
	const sec = seconds * 1000;
	d.setTime(d.getTime() + sec);
	const expires = `expires=${d.toUTCString()}`;
	document.cookie = `${cName}=${cValue}; ${expires};path=/`;
};

export const getCookie = (cName) => {
	const name = `${cName}=`;
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

export function deleteCookie(name) {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

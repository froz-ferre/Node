/**
  Count IP Addresses
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
@Examples:
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
 */

function ipsBetween(firstIp, secondIp) {
	const validIpRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
	if (!validIpRegex.test(firstIp) || !validIpRegex.test(secondIp)) {
		throw new Error('Invalid parameters, should be IP addresses!');
	}

	const first = firstIp.split('.').reverse();
	const sec = secondIp.split('.').reverse();
	return sec.reduce((acc, el, i) => acc += Math.abs(el - first[i]) * 256 ** i, 0);
}

[["10.0.0.0", "10.0.0.50"], ["10.0.0.0", "10.0.1.0"], ["20.0.0.10", "20.0.1.0"], ["18.0.0.10", "17.0.1.0"], ["12.12.12.12", "13.13.13.13"]]
	.forEach(([a, b]) => console.log(ipsBetween(a, b)));

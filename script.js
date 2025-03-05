function mod(n, m) {
    return ((n % m) + m) % m;
  }

function decode(s, k) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let c = s[i].charCodeAt();
        c = c - 32;
        c = mod((c - k), 95);
        c = c + 32;
        result += String.fromCharCode(c);
    }
    return result;
}

function decodeEmail() {
    document.querySelectorAll(".email").forEach((x) => {
        x.text = decode(x.getAttribute("href"), k=12);
        x.href = "mailto:" + decode(x.getAttribute("href"), k=12);
    });
}

decodeEmail();
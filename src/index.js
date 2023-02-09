module.exports = function reverse (n) {
    n = ((Math.abs(n) + '').split(''))
    n.reverse()
    let i = 0
    while (i < n.length) {
        if (n[i] == '0') {
            n.shift();
            i = i - 1
        } else {break}
        i++
      }
    n = n.join('')
    return n
}

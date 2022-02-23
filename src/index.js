module.exports = function reverse (n) {
    const arr = Array.from(String(n), Number);
    const res = []
    arr.forEach(function (i) {
    if (isNaN(i) == false) {
        res.push(i)
    }
   })

   res2 = res.reverse().join('')

   return res2
   
}

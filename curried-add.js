function curriedAdd(num) {
    let total = 0;
    if (num !== undefined) {
        total += num;
        return function(x) {
            if (x === undefined) {
                return total;
            } else {
                return curriedAdd(total + x);
            }
        }
    }
    return total;
}


module.exports = { curriedAdd };

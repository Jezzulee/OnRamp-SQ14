function countTruthy(arr) {
    const count = arr.filter((element)=> {
        if (element > 0)
        {return element;
        }
    });

}
module.exports = countTruthy

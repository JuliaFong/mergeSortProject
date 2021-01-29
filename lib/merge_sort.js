function merge(array1, array2) {
    let merged = []

    while (array1.length || array2.length) {
        let elem1 = array1.length ? array1[0] : Infinity
        let elem2 = array2.length ? array2[0] : Infinity

        let next
        if( elem1 < elem2) {
            next = array1.shift()
        } else {
            next = array2.shift()
        }

        merged.push(next);
    }
    return merged
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }

    let midId = Math.floor(array.length / 2)
    let leftHalf = array.slice(0, midId)
    let rightHalf = array.slice(midId)

    let sortedLeft = mergeSort(leftHalf)
    let sortedRight = mergeSort(rightHalf)

    return merge(sortedLeft, sortedRight)

}

module.exports = {
    merge,
    mergeSort
};
function binarySearch(list, element) {
    if (list.length === 0) {
        return -1;
    }
    if (list.length === 1) {
        if (list[0] === element) {
            return 0;
        }
        return -1;
    }
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
            if (list[mid] === element) {
            while (mid > 0 && list[mid - 1] === element) {
                mid--;
            }
            return mid;
        } else if (list[mid] < element) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

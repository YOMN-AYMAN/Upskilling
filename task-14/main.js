

function sumTwoNumbers(linkesList1, linkedlist2) {
    let start = { val: 0, next: null }
    let current = start;
    let carry = 0;

    while (linkesList1 || linkedlist2 || carry) {

        let v1 = linkesList1 ? linkesList1.val : 0;
        let v2 = linkedlist2 ? linkedlist2.val : 0;
        let sum = v1 + v2 + carry
        carry = Math.floor(sum / 10)
        current.next = {
            val: sum % 10,
            next: null
        }
        current = current.next;
        if (linkesList1) linkesList1 = linkesList1.next
        if (linkedlist2) linkedlist2 = linkedlist2.next
    }

    return start.next
}
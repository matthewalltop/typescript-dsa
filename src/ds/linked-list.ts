export class ListNode<T> {
    constructor(public val: T,  public next: ListNode<T> | undefined, public prev: ListNode<T> | undefined) {
    }
}
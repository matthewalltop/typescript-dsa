export class TreeNode<T> {
    constructor(public val: T, public left: TreeNode<T> | undefined, public right: TreeNode<T> | undefined) {
    }
}
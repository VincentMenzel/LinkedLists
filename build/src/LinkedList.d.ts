import { ILinkedList, INode } from "./types";
export declare class LinkedList implements ILinkedList {
    private readonly noLogging;
    private head;
    private tail;
    constructor(noLogging?: boolean);
    find(value: number): INode | null;
    append(value: number): INode;
    prepend(value: number): INode;
    deleteHead(): boolean;
    deleteTail(): boolean;
    drawChain(): void;
}
export declare class LinkedListNode implements INode {
    readonly value: number;
    prev: LinkedListNode | null;
    next: LinkedListNode | null;
    constructor(value: number);
}

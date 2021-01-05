import {ILinkedList, INode} from "./types";

export class LinkedList implements ILinkedList {
  private head: LinkedListNode | null = null;
  private tail: LinkedListNode | null = null;

  constructor(private readonly noLogging: boolean = false) {}

  public find(value: number): INode | null {
    let currentNode = this.head;

    if (!currentNode) {
      if (!this.noLogging) console.log(`LL ${value} in LL:\t${false}`);
      return null;
    }

    while (value !== currentNode!.value && currentNode!.next) {
      currentNode = currentNode!.next;
    }

    const wasFound = value === currentNode.value;
    if (!this.noLogging) console.log(`LL ${value} in LL:\t${wasFound}`);

    return wasFound
      ? currentNode
      : null;
  }

  public append(value: number): INode {
    if (!this.tail) {
      return this.tail = this.head = new LinkedListNode(value);
    }
    const oldTail = this.tail;
    this.tail = new LinkedListNode(value);

    this.tail.prev = oldTail;
    oldTail.next = this.tail;

    if (!this.noLogging) console.log(`${value} appended`)
    return this.tail;
  }

  public prepend(value: number): INode {
    if (!this.head) {
      return this.tail = this.head = new LinkedListNode(value);
    }
    const oldHead =  this.head!;
    this.head = new LinkedListNode(value);

    this.head.next = oldHead;
    oldHead.prev = this.head;


    if (!this.noLogging) console.log(`${value} prepended`)
    return this.head;
  }

  public deleteHead(): boolean {
    if (!this.head) {
      if (!this.noLogging) console.log("no head to deleted")
      return false;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else if (this.head!.next) {
      this.head = this.head.next
      this.head.prev = null
    }
    else {
      this.head = null;
    }


    if (!this.noLogging) console.log("head deleted")
    return true;
  }

  public deleteTail(): boolean {
    if (!this.tail) {
      if (!this.noLogging) console.log("no tail to deleted")
      return false;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else if (this.tail.prev) {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    else {
      this.tail = null;
    }

    if (!this.noLogging) console.log("tail deleted")
    return true;
  }

  public drawChain (): number[] {
    let currentNode = this.head || null;

    let values: number[] = [ ]

    while(currentNode) {
        values.push(currentNode.value)
        currentNode = currentNode.next
    }

    console.log(`current LL:\t(${values.join(" => ")})`)
    return values;
  }
}

export class LinkedListNode implements INode {
  prev: LinkedListNode | null = null;
  next: LinkedListNode | null = null;

  constructor(public readonly value: number) {}
}

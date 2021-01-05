import {LinkedListNode} from "./LinkedList"

interface ITail {
  prev: LinkedListNode | null;
  readonly value: number;
}

interface IHead {
  next: LinkedListNode | null;
  readonly value: number;
}

type INode = ITail & IHead;

interface ILinkedList {
  find(value: number): INode | null;

  append(value: number): INode;

  prepend(value: number): INode;

  deleteHead(): boolean;

  deleteTail(): boolean;

  drawChain(): number[];
}


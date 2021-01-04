"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListNode = exports.LinkedList = void 0;
var LinkedList = (function () {
    function LinkedList(noLogging) {
        if (noLogging === void 0) { noLogging = false; }
        this.noLogging = noLogging;
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.find = function (value) {
        var currentNode = this.head;
        if (!currentNode) {
            if (!this.noLogging)
                console.log("LL " + value + " in LL:\t" + false);
            return null;
        }
        while (value !== currentNode.value && currentNode.next) {
            currentNode = currentNode.next;
        }
        var wasFound = value === currentNode.value;
        if (!this.noLogging)
            console.log("LL " + value + " in LL:\t" + wasFound);
        return wasFound
            ? currentNode
            : null;
    };
    LinkedList.prototype.append = function (value) {
        if (!this.tail) {
            return this.tail = this.head = new LinkedListNode(value);
        }
        var oldTail = this.tail;
        this.tail = new LinkedListNode(value);
        this.tail.prev = oldTail;
        oldTail.next = this.tail;
        if (!this.noLogging)
            console.log(value + " appended");
        return this.tail;
    };
    LinkedList.prototype.prepend = function (value) {
        if (!this.head) {
            return this.tail = this.head = new LinkedListNode(value);
        }
        var oldHead = this.head;
        this.head = new LinkedListNode(value);
        this.head.next = oldHead;
        oldHead.prev = this.head;
        if (!this.noLogging)
            console.log(value + " prepended");
        return this.head;
    };
    LinkedList.prototype.deleteHead = function () {
        if (!this.head) {
            if (!this.noLogging)
                console.log("no head to deleted");
            return false;
        }
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else {
            this.head = null;
        }
        if (!this.noLogging)
            console.log("head deleted");
        return true;
    };
    LinkedList.prototype.deleteTail = function () {
        if (!this.tail) {
            if (!this.noLogging)
                console.log("no tail to deleted");
            return false;
        }
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else if (this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else {
            this.tail = null;
        }
        if (!this.noLogging)
            console.log("tail deleted");
        return true;
    };
    LinkedList.prototype.drawChain = function () {
        var currentNode = this.head || null;
        if (currentNode === null)
            return;
        var values = [];
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("current LL:\t(" + values.join(" => ") + ")");
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var LinkedListNode = (function () {
    function LinkedListNode(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;

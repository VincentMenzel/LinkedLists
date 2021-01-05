import {LinkedList} from "../src/LinkedList";
import {expect} from "chai";

describe("LinkedList", () => {

  it('no value found on empty LL', function () {
    const ll = new LinkedList(true)

    expect(ll.find(0)).to.be.null
  });

  it('LL with attend 5,4,3 finds 5,4,3', function () {
    const ll = new LinkedList(true)
    ll.append(5);
    ll.append(4);
    ll.append(3);

    expect(ll.find(5)?.value).to.be.equal(5)
    expect(ll.find(4)?.value).to.be.equal(4)
    expect(ll.find(3)?.value).to.be.equal(3)
  });

  it('LL with prepend 5,4,3 finds 5,4,3', function () {
    const ll = new LinkedList(true)
    ll.prepend(5);
    ll.prepend(4);
    ll.prepend(3);

    expect(ll.find(5)?.value).to.be.equal(5)
    expect(ll.find(4)?.value).to.be.equal(4)
    expect(ll.find(3)?.value).to.be.equal(3)
  });

  it('LL with attend 5,4,3 and deleteHead() does not contain 5', function () {
    const ll = new LinkedList(true)
    ll.append(5);
    ll.append(4);
    ll.append(3);

    ll.deleteHead()

    expect(ll.find(5)).to.be.null
  });

  it('LL with prepend 5,4,3 and deleteHead() does not contain 3', function () {
    const ll = new LinkedList(true)
    ll.prepend(5);
    ll.prepend(4);
    ll.prepend(3);

    ll.deleteHead()

    expect(ll.find(3)).to.be.null
  });

  it('list with attend 5,4,3 deleteTail() does not contain 3', function () {
    const ll = new LinkedList(true)
    ll.append(5);
    ll.append(4);
    ll.append(3);

    ll.deleteTail()

    expect(ll.find(3)).to.be.null
  });

  it('list with prepend 5,4,3 deleteTail() does not contain 5', function () {
    const ll = new LinkedList(true)
    ll.prepend(5);
    ll.prepend(4);
    ll.prepend(3);

    ll.deleteTail()

    expect(ll.find(5)).to.be.null
  });

  it('list with prepend 5,4,3 deleteTail() * 3  does not contain 5,4,3', function () {
    const ll = new LinkedList(true)
    ll.prepend(5);
    ll.prepend(4);
    ll.prepend(3);

    ll.deleteTail()
    ll.deleteTail()
    ll.deleteTail()

    expect(ll.find(5)).to.be.null
    expect(ll.find(4)).to.be.null
    expect(ll.find(3)).to.be.null
  });

  it('list with prepend 5,4,3 deleteHead() * 3  does not contain 5,4,3', function () {
    const ll = new LinkedList(true)
    ll.prepend(5);
    ll.prepend(4);
    ll.prepend(3);

    ll.deleteHead()
    ll.deleteHead()
    ll.deleteHead()

    expect(ll.find(5)).to.be.null
    expect(ll.find(4)).to.be.null
    expect(ll.find(3)).to.be.null
  });
})

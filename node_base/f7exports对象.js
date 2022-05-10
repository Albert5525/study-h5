/*
*   exports对象
*   由于module.exports单词写起来比较复杂，为了简化向外共享的代码，node提供了exports对象，默认情况下
*   exports和module,exports指向同一个对象。最终共享的结果，还是以module.exports指向的对象为准。
*
*
*
*
* */
console.log(module.exports);
console.log(exports);
console.log(module.exports===exports);
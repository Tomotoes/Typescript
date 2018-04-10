type test = "click"|"scroll"|"mousemove"|1;       // 使用 type 规定test变量为三个值其中一个
function handleEvent(ele: Element, event: test) {   //使用test类型，传入的值为规定值的其中一个
  // do something
}
handleEvent(document.getElementById("hello"), "scroll");  


/* 用于函数重载 */
function cElement(tagName: "img"): HTMLImageElement;
function cElement(tagName: "input"): HTMLInputElement;

function cElement(tagName: string): Element{
  return document.createElement(tagName);
}

// cElement("button");错误
cElement("input");
cElement("img");

/* 数字字面类型 */
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
  return 1;
}


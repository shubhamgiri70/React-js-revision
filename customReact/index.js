let root = document.getElementById("root");

let reactEle = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MainContainer(reactEle, root) {
  let element = document.createElement(reactEle.type);
  element.innerText = reactEle.children;
  element.setAttribute("href", reactEle.props.href);
  element.setAttribute("target", reactEle.props.target);
  root.appendChild(element);
}

MainContainer(reactEle, root);

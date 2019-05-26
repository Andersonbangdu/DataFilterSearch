var personArr = [
  {
    name: "Tom",
    src: "./src/img/1.jpg",
    des: "Build that wall!",
    sex: "m",
    age: "18"
  },
  {
    name: "Tami",
    src: "./src/img/2.jpg",
    des: "I love China!",
    sex: "f",
    age: "28"
  },
  {
    name: "Jack",
    src: "./src/img/3.jpg",
    des: "There is nobody knows bussiness better than I do.",
    sex: "m",
    age: "23"
  },
  {
    name: "Jennifer",
    src: "./src/img/4.jpg",
    des: "I got good looking!",
    sex: "f",
    age: "58"
  },
  {
    name: "Peter",
    src: "./src/img/5.jpg",
    des: "Make America great again!",
    sex: "m",
    age: "30"
  }
];

//Initial Varible
var oul = document.getElementsByTagName("ul")[0];
var oInput = document.getElementsByTagName("input")[0];

store.subscribe(function() {
  // update rendering
  render(finalFilterArr(personArr));
});
store.getState("sex");
// Data Rendering
function render(data) {
  var dataStr = "";
  oul.innerHTML = "";
  data.forEach(function(ele, index, self) {
    dataStr =
      dataStr +
      '<li><img src="' +
      ele.src +
      '"><p class="name">' +
      ele.name +
      '</p><p class="des">' +
      ele.des +
      "</p></li>";
  });
  oul.innerHTML = dataStr;
}
render(personArr);

// Text Searching
oInput.oninput = function() {
  store.dispatch({ type: "text", value: this.value.toUpperCase() });
  render(finalFilterArr(personArr));
};
// onclick style and filter
var btnArr = [].slice.call(document.getElementsByClassName("btn"), 0); //It not a array, we need function to change it/
var lastActiveBtn = btnArr[2];

btnArr.forEach(function(ele, index, self) {
  ele.onclick = function() {
    changeActive(this);
    store.dispatch({ type: "sex", value: (sex = this.getAttribute("sex")) });
  };
});

function changeActive(curActiveBtn) {
  curActiveBtn.className = "btn active";
  lastActiveBtn.className = "btn";
  lastActiveBtn = curActiveBtn;
}

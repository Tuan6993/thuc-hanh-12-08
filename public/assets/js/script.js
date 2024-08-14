const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log("id của sản phẩm cần lấy: id" + id);
document.getElementById("tensanpham").innerHTML = "Iphone 14 pro max" + id;

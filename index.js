const express = require("express");
const path = require("path");
const app = express();
// Đường dẫn đến thư mục chứa tệp HTML của bạn
const publicDirectory = path.join(__dirname, "public");

// Sử dụng middleware static để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(publicDirectory));

app.get("/", (request, response) => {
  //
  const trangchu = path.join(publicDirectory, "/templates/trangchu.html");
  response.sendFile(trangchu);
});

app.get("/chitietsanpham:id", (request, response) => {
  //lấy sản phẩm có id = :id
  //
  const chitietsanpham = path.join(
    publicDirectory,
    "/templates/chitietsanpham.html"
  );
  response.sendFile(chitietsanpham);
});

app.listen(5500, () => {
  console.log("ỨNG DỤNG CHẠY TRÊN CỔNG 5500");
});

module.exports = app;

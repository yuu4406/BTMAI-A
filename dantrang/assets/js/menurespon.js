function openNav() {
  // Hiển thị sidebar
  document.getElementById("mySidebar").style.display = "block";

  // Hiển thị nút đóng, ẩn nút mở
  document.getElementsByClassName("openbtn")[0].style.display = "none";
  document.getElementsByClassName("closebtn")[0].style.display = "block";
}

function closeNav() {
  // Ẩn sidebar
  document.getElementById("mySidebar").style.display = "none";

  // Hiển thị nút mở, ẩn nút đóng
  document.getElementsByClassName("openbtn")[0].style.display = "block";
  document.getElementsByClassName("closebtn")[0].style.display = "none";
}
function toggleDocumentMenu() {
  var menu = document.querySelector(".document_menu");
  var menuList = document.getElementsByClassName("menu-list")[0];

  // Ẩn/hiện menu con
  if (menu.style.display === "block") {
    menu.style.display = "none"; // Ẩn menu con

    // Chỉ khôi phục chiều cao cho điện thoại
    if (window.innerWidth <= 766) {
      menuList.style.height = "auto"; // Khôi phục chiều cao
    }
  } else {
    menu.style.display = "block"; // Hiển thị menu con

    // Chỉ điều chỉnh chiều cao cho điện thoại
    if (window.innerWidth <= 766) {
      menuList.style.height = "49%"; // Thay đổi chiều cao cho menu-list
    }
  }
}

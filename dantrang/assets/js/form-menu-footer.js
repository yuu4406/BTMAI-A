document.addEventListener("DOMContentLoaded", function () {
  const headertimeHTML = `
    <h6><i class="fa-solid fa-clock-rotate-left"></i> GIỜ MỞ CỬA:
            Tất cả các ngày trong tuần
            (Kể cả ngày Lễ, Tết)
            Từ 8h00 đến 17h00</h6>
            <div class="search-box">
                <input type="text" placeholder="Tìm kiếm...">
                <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
    <img src="./assets/img/Flag_of_Vietnam.svg.webp" alt="">

    `;
  document
    .querySelector(".header_time")
    .insertAdjacentHTML("afterbegin", headertimeHTML);

  const menuHTML = `
        <div id="main" class="icon-menu">
        <i onclick="openNav()" class="openbtn fa-solid fa-bars"></i>
        <i onclick="closeNav()" class="closebtn fa-solid fa-xmark"></i>
        </div>
        

    <div class="menu-icon">
        <img class="menu-icon-item" src="./assets/img/Group 2.1.png" alt="">
    </div>
    <div id="mySidebar" class="menu-list-box">
    <ul class="menu-list">
        <li><a href="./index.html"><i class="fa-solid fa-house-chimney"></i>giới thiệu</a></li>
        <li><a href="./documentary.html">tin tức-sự kiện</a></li>
        <li><a href="./gallery.html">trưng bày</a></li>
        <li><a href="./education.html">giáo dục truyền thông</a></li>
        <li><a href="./artifact.html">sản phẩm đặc trưng</a></li>
        <li><a href="./post.html"> Tài Liệu</a></li>
        <li><a href="./register.html">dịch vụ</a></li>
        <li><a href="./contact.html">liên hệ</a>
    </ul>
    </div>
    `;
  document.querySelector(".menu").insertAdjacentHTML("afterbegin", menuHTML);

  const footerHTML = `
    <div class="infomation container">
            <div class="infomation_item logo">
                <img src="./assets/img/Group 2.1.png" alt="">
            </div>
            <div class="infomation_item info">
                <h1 class="footer_h1">thông tin liên hệ</h1>
                <div>
                    <p><i class="fa-solid fa-house-flag"></i>Số 1, phố Hỏa Lò, Hoàn Kiếm, Hà Nội</p>
                    <p><i class="fa-solid fa-phone-volume"></i>024.39342253</p>
                    <p><i class="fa-solid fa-blender-phone"></i>024.39342317</p>
                    <p><i class="fa-solid fa-envelope"></i>bqldtnthl_sovhtt@hanoi.gov.vn</p>
                    
                </div>
            </div>
            <div class="infomation_item link">
                <h1 class="footer_h1">thông tin liên hệ</h1>
                <div class="link_item">
                    <div>
                        <img src="./assets/img/footer/a1.png" alt="">
                        <p>Hoàng thành 
                            Thăng Long</p>
                    </div>
                    <div>
                        <img src="./assets/img/footer/a2.png" alt="">
                        <p>Bảo tàng
                            Hồ Chí Minh</p>
                    </div>
                    <div>
                        <img src="./assets/img/footer/a3.png" alt="">
                        <p>Bảo tàng
                            Phụ nữ Việt Nam</p>
                    </div>
                    <div>
                        <img src="./assets/img/footer/a4.png" alt="">
                        <p>Bảo tàng
                            Công an nhân dân</p>
                    </div>
                    <div>
                        <img src="./assets/img/footer/a5.png" alt="">
                        <p>Bảo tàng
                            Mỹ thuật Việt Nam</p>
                    </div>
                    <div>
                        <img src="./assets/img/footer/a6.png" alt="">
                        <p>Bảo tàng
                            Lịch sử Quốc gia</p>
                    </div>
    
                </div>
            </div>
            <div class="infomation_item facebook">
                <h1 class="footer_h1">thông tin liên hệ</h1>
                <div class="facebook_item">
                    <div class="fb-page" data-href="https://www.facebook.com/pages/Khu-Di-T%C3%ADch-Nh%C3%A0-T%C3%B9-Ho%E1%BA%A3-L%C3%B2/290522211146747" data-tabs="timeline" data-width="" data-height="200px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
                </div>
            </div>
        </div>
    `;

  document
    .querySelector("#footer")
    .insertAdjacentHTML("afterbegin", footerHTML);

  const menuiconHTML = `
    <div class="icon-item">
                <a href="">
                    <i class="fa-sharp fa-solid fa-ticket"></i>
                    <div>vé tham quan</div>
                </a>
            </div>
            <div class="icon-item">
                <a href="">
                    <i class="fa-solid fa-map-location-dot"></i>
                    <div>sơ đồ</div>
                </a>
            </div>
            <div class="icon-item">
                <a href="">
                    <i class="fa-solid fa-list-ul"></i>
                    <div>quy định</div>
                </a>
            </div>
            <div class="icon-item">
                <a href="./register.html">
                    <i class="fa-solid fa-fingerprint"></i>
                    <div>đăng ký</div>
                </a>
            </div>
    `;
  document
    .querySelector(".menu-icon-list")
    .insertAdjacentHTML("afterbegin", menuiconHTML);
});

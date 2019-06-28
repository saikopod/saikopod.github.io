createFooter();
renderFooterBlogRecords();
createLoader();
appendScripts();


function createFooter() {
    document.write(`

<footer id="footer" class="ftco-footer ftco-bg-dark ftco-section">

      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-5">
            <h2 class="ftco-heading-2">Have a Questions?</h2>
            <div class="block-23 mb-3">
              <ul>
                <li><span class="icon icon-map-marker"></span><span class="text">ул.Мебельная д.47</span></li>
                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+7-981-803-32-38</span></a></li>
                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@happysadik.ru</span></a></li>
              </ul>
            </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
  <div class="ftco-footer-widget mb-5" id="blogFooter">

<!-- blogFooter -->

  </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-5 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Home</a></li>
                <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>About</a></li>
                <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Services</a></li>
                <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Deparments</a></li>
                <li><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="ftco-footer-widget mb-5">
            <h2 class="ftco-heading-2">Subscribe Us!</h2>
              <form action="#" class="subscribe-form">
                <div class="form-group">
                  <input type="text" class="form-control mb-2 text-center" placeholder="Enter email address">
                  <input type="submit" value="Subscribe" class="form-control submit px-3">
                </div>
              </form>
            </div>
            <div class="ftco-footer-widget mb-5">
            <h2 class="ftco-heading-2 mb-0">Connect With Us</h2>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row copyright">
          <div class="col-md-12 text-center">

            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>

</footer>

`)

}

function createLoader() {
    document.write(`

<div id="ftco-loader" class="show fullscreen">
    <svg class="circular" width="48px" height="48px">
        <g fill="none" stroke-width="4">
            <circle class="path-bg" cx="24" cy="24" r="22" stroke="#eeeeee"></circle>
            <circle class="path" cx="24" cy="24" r="22" stroke-miterlimit="10" stroke="#F96D00"></circle>
        </g>
    </svg>
</div>

`)

}

function appendScripts() {
    document.write(`

<script src="js/libs/jquery.min.js"></script>
<script src="js/libs/jquery-migrate-3.0.1.min.js"></script>
<script src="js/libs/popper.min.js"></script>
<script src="js/libs/bootstrap.min.js"></script>
<script src="js/libs/jquery.easing.1.3.js"></script>
<script src="js/libs/jquery.waypoints.min.js"></script>
<script src="js/libs/jquery.stellar.min.js"></script>
<script src="js/libs/owl.carousel.min.js"></script>
<script src="js/libs/jquery.magnific-popup.min.js"></script>
<script src="js/libs/aos.js"></script>
<script src="js/libs/jquery.animateNumber.min.js"></script>
<script src="js/libs/scrollax.min.js"></script>

<script src="js/main.js"></script>


`)
}

function renderFooterBlogRecords(){
    blogFooter.innerHTML =
        '<h2 class="ftco-heading-2">Recent Blog</h2>'
        + footerBlogRecord(data[0])
        + footerBlogRecord(data[1]);
}

function footerBlogRecord(data) {
    return `

<div class="block-21 mb-4 d-flex">
    <a class="blog-img mr-4" style="background-image: url(${data.img});"></a>
    <div class="text">
      <h3 class="heading"><a href="${data.link}">${data.header}</a></h3>
      <div class="meta">
        <div><a href="${data.link}"><span class="icon-calendar"></span> ${data.date.join(', ')}</a></div>
        <div><a href="${data.link}"><span class="icon-person"></span> ${data.author}</a></div>
        <div><a href="${data.link}"><span class="icon-chat"></span> ${data.comments}</a></div>
      </div>
    </div>
</div>

    `
}




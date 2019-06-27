document.body.innerHTML += `

<div class="py-2 bg-primary">
    <div class="container">
        <div class="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
            <div class="col-lg-12 d-block">
                <div class="row d-flex">
                    <div class="col-md-5 pr-4 d-flex topper align-items-center">
                        <div class="icon bg-fifth mr-2 d-flex justify-content-center align-items-center"><span
                                class="icon-map"></span></div>
                        <span class="text">ул.Мебельная д.47</span>
                    </div>
                    <div class="col-md pr-4 d-flex topper align-items-center">
                        <div class="icon bg-secondary mr-2 d-flex justify-content-center align-items-center"><span
                                class="icon-paper-plane"></span></div>
                        <span class="text">info@happysadik.ru</span>
                    </div>
                    <div class="col-md pr-4 d-flex topper align-items-center">
                        <div class="icon bg-tertiary mr-2 d-flex justify-content-center align-items-center"><span
                                class="icon-phone2"></span></div>
                        <span class="text">+7-981-803-32-38</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
    <div class="container d-flex align-items-center">
        <a class="navbar-brand" href="index.html">
            <img src="logo-white.svg" class="logo-white">
            <img src="logo-black.svg" class="logo-black">
        </a>
        <button class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#ftco-nav"
                aria-controls="ftco-nav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
        </button>
<!--         <p class="button-custom order-lg-last mb-0"><a href="appointment.html" class="btn btn-secondary py-2 px-3">Make An Appointment</a></p> -->
        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item ${isActive('index')}"><a href="index.html" class="nav-link pl-0">Home</a></li>
                <li class="nav-item ${isActive('about')}"><a href="about.html" class="nav-link">About</a></li>
                <li class="nav-item ${isActive('teacher')}"><a href="teacher.html" class="nav-link">Teacher</a></li>
                <li class="nav-item ${isActive('courses')}"><a href="courses.html" class="nav-link">Courses</a></li>
                <li class="nav-item ${isActive('pricing')}"><a href="pricing.html" class="nav-link">Pricing</a></li>
                <li class="nav-item ${isActive('blog')}"><a href="blog.html" class="nav-link">Blog</a></li>
                <li class="nav-item ${isActive('contact')}"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- END nav -->

`;

function isActive(page) {
    return ~document.location.href.indexOf(page) ? 'active' : ''
}
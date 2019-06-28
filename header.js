appendStyles();
initBlogData();
createContactsRow();
createNavigation();

function initBlogData() {
    document.write('<script src="blog-data.js"></script>');
}

function appendStyles() {
    document.head.innerHTML += `
<link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet">
<link rel="stylesheet" href="css/open-iconic-bootstrap.min.css">
<link rel="stylesheet" href="css/animate.css">
<link rel="stylesheet" href="css/owl.carousel.min.css">
<link rel="stylesheet" href="css/owl.theme.default.min.css">
<link rel="stylesheet" href="css/magnific-popup.css">
<link rel="stylesheet" href="css/aos.css">
<link rel="stylesheet" href="css/ionicons.min.css">
<link rel="stylesheet" href="css/flaticon.css">
<link rel="stylesheet" href="css/icomoon.css">
<link rel="stylesheet" href="css/happysadik.css">
`;
}

function createContactsRow() {
    document.write(`

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

`);
}

function createNavigation() {
    document.write(`
    
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
    <div class="container d-flex align-items-center">
        <a class="navbar-brand" href="index.html">
            <img src="images/logo-white.svg" class="logo-white">
            <img src="images/logo-black.svg" class="logo-black">
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
    
    `);
}

function isActive(page) {
    return ~document.location.href.indexOf(page) ? 'active' : ''
}

function createBreadcrumbs() {
    let args = [].slice.call(arguments);
    document.write(`
    
        <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text align-items-center justify-content-center">
                    <div class="col-md-9 ftco-animate text-center">
                        <h1 class="mb-2 bread">${args[0]}</h1>
                        <p class="breadcrumbs">${args.map(function (element, index) {
        if (index === 0) return '';
        let last = index === args.length - 1;
        let text = `${last ? element : element[0]} <i class="ion-ios-arrow-forward"></i>`;
        if (last) return `<span>${text}</span>`;
        return `<span class="mr-2"><a href="${element[1]}">${text}</a></span>`;
    }).join('')}</p>
                    </div>
                </div>
            </div>
        </section>
    
    `)
}
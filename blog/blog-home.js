renderBlogOnHomePage()

function renderBlogOnHomePage() {
    blogHome.innerHTML =
        blogRecord_homePage(data[0]) +
        blogRecord_homePage(data[1]) +
        blogRecord_homePage(data[2])
}

function blogRecord_homePage(data) {
    return `
    
<div class="col-md-6 col-lg-4 ftco-animate">
<div class="blog-entry">
  <a href="${data.link}" class="block-20 d-flex align-items-end" style="background-image: url('${data.img}');">
      <div class="meta-date text-center p-2">
      <span class="day">${data.date[0]}</span>
      <span class="mos">${data.date[1]}</span>
      <span class="yr">${data.date[2]}</span>
    </div>
  </a>
  <div class="text bg-white p-4">
    <h3 class="heading"><a href="#">${data.header}</a></h3>
    <p>${data.text}</p>
    <div class="d-flex align-items-center mt-4">
    <p class="mb-0">
        <a href="${data.link}" class="btn btn-secondary">
            Читать дальше <span class="ion-ios-arrow-round-forward"></span>
        </a>
    </p>
    <p class="ml-auto mb-0">
   <a href="#" class="mr-2">${data.author}</a>
    <a href="#" class="meta-chat"><span class="icon-chat"></span> ${data.comments}</a>
    </p>
    </div>
  </div>
</div>
</div>
    
    
`
}
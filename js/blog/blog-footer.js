
renderLatest();

function renderLatest(){
    blogFooter.innerHTML =
        '<h2 class="ftco-heading-2">Recent Blog</h2>'
        + blogRecord(data[0])
        + blogRecord(data[1]);
}

function blogRecord(data) {
    return `

<div class="block-21 mb-4 d-flex">
    <a class="blog-img mr-4" style="background-image: url(${data.img});"></a>
    <div class="text">
      <h3 class="heading"><a href="#">${data.header}</a></h3>
      <div class="meta">
        <div><a href="#"><span class="icon-calendar"></span>${data.date.join(', ')}</a></div>
        <div><a href="#"><span class="icon-person"></span>${data.author}</a></div>
        <div><a href="#"><span class="icon-chat"></span>${data.comments}</a></div>
      </div>
    </div>
</div>

    `
}
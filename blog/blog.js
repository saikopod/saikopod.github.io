
renderBlog(6);

function renderBlog(count, offset) {
    blog.innerHTML = Array(count)
        .fill(0)
        .map((e, i) => blogPage(data[i+(offset||0)]))
        .join('')
}

function blogPage(page) {
    return `

<div class="col-md-6 col-lg-4 ftco-animate fadeInUp ftco-animated">
    <div class="blog-entry">
        <a href="${page.link}" 
           class="block-20 d-flex align-items-end" 
           style="background-image: url('${page.img}');">
           
            <div class="meta-date text-center p-2">
                <span class="day">${page.date[0]}</span>
                <span class="mos">${page.date[1]}</span>
                <span class="yr">${page.date[2]}</span>
            </div>
        </a>
        <div class="text bg-white p-4">
            <h3 class="heading"><a href="#">${page.header}</a></h3>
            <p>${page.text}</p>
            <div class="d-flex align-items-center mt-4">
                <p class="mb-0">
                    <a href="${page.link}" class="btn btn-secondary">
                        Читать дальше <span class="ion-ios-arrow-round-forward"></span>
                    </a>
                </p>
                <p class="ml-auto mb-0">
                    <a href="#" class="mr-2">${page.author}</a>
                    <a href="#" class="meta-chat"><span class="icon-chat"></span> ${page.comments}</a>
                </p>
            </div>
        </div>
    </div>
</div>

`
}
renderBlog();

function renderBlog() {

    let search = document.location.search
        .substring(1).split('&')
        .map(el => el.split("="))
        .reduce((acc, el) => {
            acc[el[0]] = el[1];
            return  acc
        }, {});

    let d = [].slice.call(data), page = 1, count = 6;
    search.tag && (d = d.filter(el => ~el.tags.indexOf(search.tag)));

    blog.innerHTML = Array(count)
        .fill(0)
        .map((e, i) => d[i+(page-1)*count] ? blogPage(d[i+(page-1)*count]) : '')
        .join('');

    let nav = Array(Math.ceil(d.length/count)).fill(0).map(function (e, i) {
        let n = i + 1;
        if (n === page)
            return `<li class="active"><span>${n}</span></li>`;
        return `<li><a href="#">${n}</a></li>`  ;
    }).join('');

    blogNavigation.innerHTML = `   
           
<li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
${nav}    
<li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>

`
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
                        Читать <span class="ion-ios-arrow-round-forward"></span>
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

let tags = data.find(el => ~document.location.href.indexOf(el.link)).tags;

document.write(`

<div class="tag-widget post-tag-container mb-5 mt-5">
    <div class="tagcloud">
        ${tags.map(function (tag) {
            return `<a href="blog.html?${tag}" class="tag-cloud-link">${tag}</a>`
        }).join('')}
    </div>
</div>

`);
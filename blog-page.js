renderTagCloud();
renderRightColumn();

function renderTagCloud() {
    let tags = data.find(el => ~document.location.href.indexOf(el.link))
        .tags.map(function (tag) {
            return `<a href="blog.html?tag=${tag}" class="tag-cloud-link">${tag}</a>`
        }).join('');
    tagCloud.innerHTML = `<div class="tagcloud">${tags}</div>`;
}

function renderRightColumn() {

    blogRightColumn.innerHTML = `
    
    <div class="sidebar-box ftco-animate">
        <h3>Category</h3>
        <ul class="categories">
            <li><a href="#">Art <span>(6)</span></a></li>
            <li><a href="#">Sports <span>(8)</span></a></li>
            <li><a href="#">Language <span>(2)</span></a></li>
            <li><a href="#">Food <span>(2)</span></a></li>
            <li><a href="#">Music <span>(2)</span></a></li>
        </ul>
    </div>
    
    <div class="sidebar-box ftco-animate">
        <h3>Popular Articles</h3>
        ${mostPopularBlogs()}
    </div>
    
    <div class="sidebar-box ftco-animate">
        <h3>Tag Cloud</h3>
        <ul class="tagcloud m-0 p-0">
            ${renderTagCloud()}
        </ul>
    </div>

    <div class="sidebar-box ftco-animate">
        <h3>Archives</h3>
        <ul class="categories">
            ${renderArchives()}
        </ul>
    </div>
    
    <div class="sidebar-box ftco-animate">
        <h3>Paragraph</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus
            voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur
            similique, inventore eos fugit cupiditate numquam!</p>
    </div>
    
    
    `;
}

function mostPopularBlogs() {
    return data.sort((a, b) => b.comments - a.comments)
        .filter((e, i) => i < 3)
        .map(function (post) {
            return `
        

<div class="block-21 mb-4 d-flex">
    <a class="blog-img mr-4" style="background-image: url(${post.img});"></a>
    <div class="text">
        <h3 class="heading"><a href="${post.link}">${post.header}</a></h3>
        <div class="meta">
            <div><a href="#"><span class="icon-calendar"></span> ${post.date.join(', ')}</a></div>
            <div><a href="#"><span class="icon-person"></span> ${post.author}</a></div>
            <div><a href="#"><span class="icon-chat"></span> ${post.comments}</a></div>
        </div>
    </div>
</div>
                
        `}).join('');
}

function renderTagCloud() {
    return data
        .reduce((acc, el) => acc.concat(el.tags.filter(tag => !~acc.indexOf(tag))), [])
        .map(tag => `<a href="blog.html?tag=${tag}" class="tag-cloud-link">${tag}</a>`)
        .join('')
}

function renderArchives() {
    return `
        
<li><a href="#">December 2018 <span>(30)</span></a></li>
<li><a href="#">Novemmber 2018 <span>(20)</span></a></li>
<li><a href="#">September 2018 <span>(6)</span></a></li>
<li><a href="#">August 2018 <span>(8)</span></a></li>
        
    `;
}
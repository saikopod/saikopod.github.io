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
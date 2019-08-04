let sectionGoals = [[
    'flaticon-security',
    `
    Гарантированная адаптация за 5 дней, при условии, что родители выполняют рекомендации по адаптации.
    `
],[
    'flaticon-kids',
    `
    Нет вступительных взносов. Первые 5 дней оплата почасовая 220 руб./час.
    `
],[
    'flaticon-reading',
    `
    Официальные заключения Центра гигиены и эпидемиологии, Роспотребнадзора.
    `
],[
    'flaticon-diploma',
    `
    В группе 10 человек, каждый ребенок получает индивидуальную заботу. Дети болеют значительно реже.
    `
],[
    'flaticon-education',
    `
    С вашими детьми работают профессиональные педагоги. Более 20 видов развивающей деятельности.
    `
],[
    'flaticon-jigsaw',
    `
    Организованы выездные тренировки по гимнастике.
    `
],[
    'flaticon-kids',
    `
     В течение года у нас проходят праздники, спектакли, фотосессии.
    `
],[
    'flaticon-kids',
    `
    Хорошая атмосфера и настоящие положительные отзывы. У родителей и воспитателей доверительные отношения, а дети приходят в садик, как в гости к друзьям.
    `
]];


document.write(`

<section class="ftco-section ftco-no-pt ftc-no-pb">
    <div class="container">
        <div class="row">
            <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
                <div class="text px-4 ftco-animate">
                    <h2 class="mb-4">Добро пожаловать</h2>
                    <p>Если вам необходимо обеспечить ребёнку полноценное развитие, достойную заботу и гармоничное развитие, пока вы находитесь на работе или занимаетесь важными делами, приглашаем ваших деток  в Центр развития, ясли-сад «Симфония развития».</p>
<!--                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language-->
<!--                        ocean. A small river named Duden flows by their place and supplies it with the necessary-->
<!--                        regelialia. And if she hasn’t been rewritten, then they are still using her.</p>-->
<!--                    <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>-->
                </div>
            </div>
            <div class="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
                <h2 class="mb-4">Наша цель</h2>
                <p>Создать благоприятную атмосферу для взаимного общения и пребывания малышей в новом коллективе.</p>
                <div class="row mt-5">`);

document.write(sectionGoals.map(goal => `
                
                <div class="col-lg-6">
                    <div class="services-2 d-flex">
                        <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                            <span class="${goal[0]}"></span>
                        </div>
                        <div class="text">
                <!--       <h3>Safety First</h3>-->
                            <p>${goal[1]}</p>
                        </div>
                    </div>
                </div>
                
                    `).join(''));


document.write(` 
               </div>
            </div>
        </div>
    </div>
</section>


`);

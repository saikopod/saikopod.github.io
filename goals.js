function createGoals() {
    document.write([...arguments].map(goal => `

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
}
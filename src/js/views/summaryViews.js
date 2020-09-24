export const renderSummary = (sumData) => {
    const markup = ` <!-- Section -->
    <section>
        <header class="major">
            <h2>Summary of Covid-19 in Nepal</h2>
            <p> As of <span class="date">${dateRender(sumData.updated_at)}</span></p><br>
        </header>
        <div class="features">
            <article>
                <span class="icon  solid fa-flask"></span>
                <div class="content">
                    <h3>Tests</h3>
                    <p><b>${sumData.tested_positive}</b> people tested positive for corona virus in Nepal while <b>${sumData.tested_negative}</b> people were tested Negative.</p>
                </div>
            </article>
            <article>
                <span class="icon solid fa-h-square"></span>
                <div class="content">
                    <h3>Quarantined/Isolation</h3>
                    <p><b>${sumData.quarantined}</b> people are quarintined while <b>${sumData.in_isolation}</b> have been put in isolation.</p>
                </div>
            </article>
            <article>
                <span class="icon solid fa-exclamation-triangle"></span>
                <div class="content">
                    <h3>Death</h3>
                    <p>The death toll due to corona virus has reached <b>${sumData.deaths}</b>.</p>
                </div>
            </article>
            <article>
                <span class="icon solid fa-heart"></span>
                <div class="content">
                    <h3>Recovered</h3>
                    <p><b>${sumData.recovered}</b> people have recovered from corona virus.</p>
                </div>
            </article>
        </div>
    </section>`;

    document.querySelector('.dataView').insertAdjacentHTML('afterbegin', markup);
};
const dateRender = (date) => {
    let newDate = date.slice(0, 10);
    return newDate;
};

document.querySelector('.heading').innerText = `Summary`;
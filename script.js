let score = document.getElementById("score");
let topics = document.getElementById("topics");

async function getData() {
    const res = await fetch("/data.json");

    let data = await res.json();
    console.log(data);
    let result = 0;
    data.forEach(elem => {
        let categories = `
            <div class="topic ${elem.category.toLowerCase()}">
                <div class="left">
                    <img src="${elem.icon}" alt="reaction icon">
                    <span>${elem.category}</span>
                </div>
                <div class="right">
                    <p><span id="reaction" class="score">${elem.score}</span> <span class="max">/ 100</span></p>
                </div>
            </div>
        `
        topics.innerHTML += categories;

        result += elem.score;
    });
    console.log(result);
    score.innerHTML = Math.floor(result / 4);
}

getData();
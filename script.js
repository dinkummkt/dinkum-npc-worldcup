
let currentRound = [];
let nextRound = [];
let index = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)];
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showMatch() {
    const container = document.getElementById('tournament');
    container.innerHTML = '';
    if (index >= currentRound.length - 1) {
        if (nextRound.length === 1) {
            const winner = nextRound[0];
            container.innerHTML = `<h2>Your favorite Dinkum NPC is...</h2>
                                   <div class="card"><img src="${winner.image}"><p>${winner.name}</p></div>`;
            return;
        }
        currentRound = [...nextRound];
        nextRound = [];
        index = 0;
    }
    const npc1 = currentRound[index];
    const npc2 = currentRound[index + 1];
    [npc1, npc2].forEach(npc => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="\${npc.image}" alt="\${npc.name}"><p>\${npc.name}</p>`;
        card.onclick = () => {
            nextRound.push(npc);
            index += 2;
            showMatch();
        };
        container.appendChild(card);
    });
}

window.onload = () => {
    currentRound = [...npcList];
    shuffle(currentRound);
    showMatch();
};

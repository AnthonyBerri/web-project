document.getElementById('submitButton').addEventListener('click', function() {
    const link = document.getElementById('linkInput').value;
    window.location.href = `./src/redirecter/index.html?link=${encodeURIComponent(link)}`;
});

const params = new URLSearchParams(window.location.search);
const link = params.get('link');

if (!link) {
    const div = document.getElementById('iImg');
    if (div) {
        div.innerHTML = "<p>URL errado.</p>";
    }
} else {
    function buttonClick() {
        fetch('./links.json') 
            .then(response => response.json())
            .then(links => {
                const link = links.find(m => m.id == linkId);
                selectedLink = link; // Save the link object globally

                const main = document.getElementsByClassName('link-box');
                if (main) {
                    if (link) {
                        main.innerHTML = `
                            <a href="${link.url}" target="_blank" class="link-box">
                                ${link.name}
                            </a>
                        `;
                    } else {
                        div.innerHTML = `<p>Marca não encontrada</p>`; 
                    }
                }
            })
            .catch(error => {
                const div = document.getElementById('info');
                if (div) {
                    div.innerText = "Erro ao carregar os dados.";
                }
                console.error('Erro:', error);
            });
    }
}
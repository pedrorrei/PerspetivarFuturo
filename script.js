const teamMembers = [
    { name: "Carolina Vila Maior", position: "Vice-Presidente", imageUrl: 'vilamaior.jpg', sector: "Política Educativa" },
    { name: "Pedro Rei", position: "Vogal", imageUrl: 'rei.jpg', sector: "Política Educativa"},
    { name: "Bianca Ramos", position: "Vogal", imageUrl: 'bainca.jpg', sector: "Política Educativa" },
    { name: "Wilson do Carmo", position: "Presidente", imageUrl: 'wison.jpg', sector: "Presidência" },
    { name: "Margarida Cordeiro", position: "Vice-Presidente", imageUrl: 'Margarida Cordeiro.jpg', sector: "Aveiro é Nosso" },
    { name: "Francisco Silveira", position: "Vice-Presidente", imageUrl: 'franciscosilveir-1.jpg', sector: "Desporto e Bem Estar" },
    { name: "Joana Regadas", position: "Vice-Presidente Adjunta", imageUrl: 'regadas.jpg', sector: "Presidência" },
    { name: "Paulo Judite", position: "Tesoureiro", imageUrl: 'judite.jpg', sector: "Presidência" },
    { name: "Pedro Cruz", position: "Vice-Presidente", imageUrl: 'pedrocruz___-1.jpg', sector: "Comunicação e Imagem" },
    { name: "João Cruz", position: "Tesoureiro Adjunto", imageUrl: 'joaocruz.jpg', sector: "Presidência" },
    { name: "Gustavo Oliveira", position: "Secretário Geral", imageUrl: 'gustavo.jpg', sector: "Presidência" },
    { name: "Carolina Alberto", position: "Administradora", imageUrl: 'carolinaalberto.jpg', sector: "Presidência" },
    { name: "Andreia Novais", position: "Vogal", imageUrl: 'Andreia Novais.jpg', sector: "Aveiro é Nosso" },
    { name: "Guilherme Freitas", position: "Vice-Presidente", imageUrl: 'Guilherme Freitas.jpg', sector: "Apoio aos Núcleos" },
    { name: "Maria Ferreira", position: "Vogal", imageUrl: 'Maria Ferreira.jpg', sector: "Apoio aos Núcleos" },
    { name: "Lénia Ferreira", position: "Vogal", imageUrl: 'lenia.jpg', sector: "Apoio aos Núcleos" },
    { name: "Joana Ferreira", position: "Vogal", imageUrl: 'Joana Ferreira.jpg', sector: "Aveiro é Nosso" },
    { name: "Joana Aleixo", position: "Vogal", imageUrl: 'joanaaleixo-1.jpg', sector: "Comunicação e Imagem" },
    { name: "Matilde Ferreira", position: "Vogal", imageUrl: 'matildepreto-1.jpg', sector: "Comunicação e Imagem" },
    { name: "Lucas Matos", position: "Vice-Presidente", imageUrl: 'lucasmatos.jpg', sector: "Administração Interna" },
    { name: "Hugo Oliveira", position: "Vogal", imageUrl: 'hugooliveira.jpg', sector: "Administração Interna" },
    { name: "Juan Carpintero", position: "Vogal", imageUrl: 'juan.jpg', sector: "Administração Interna" },
    { name: "Pedro Rocha", position: "Vice-Presidente", imageUrl: 'pedrorocha-1.jpg', sector: "Cultura" },
    { name: "Maria Ferreira", position: "Vogal", imageUrl: 'mariaferreira-1.jpg', sector: "Cultura" },
    { name: "Leonardo Salazar", position: "Vogal", imageUrl: 'leo-1.jpg', sector: "Cultura" },
    { name: "Luzia Ferreira", position: "Vogal", imageUrl: 'luzia.jpg', sector: "Desporto e Bem Estar" },
    { name: "Pedro Palavra", position: "Vogal", imageUrl: 'pedropalavra.jpg', sector: "Administração Interna" },
    { name: "Gonçalo Marques", position: "Presidente", imageUrl: 'Goncalo.jpg', sector: "MAG" },
    { name: "Nânci Marques", position: "Vice-Presidente", imageUrl: 'magnanci.jpg', sector: "MAG" },
    { name: "Matilde Pinho", position: "Vogal", imageUrl: 'matildepinho-1.jpg', sector: "Comunicação e Imagem" },
    { name: "Fábio Yu Chen", position: "Presidente", imageUrl: 'fabyo.jpg', sector: "CFJ" },
    { name: "Miguel Martins", position: "Vice-Presidente", imageUrl: 'migueçmartins.jpg', sector: "CFJ" },
    { name: "Inês Filipe", position: "1.º Secretaria", imageUrl: 'inesfilipa.jpg', sector: "MAG" },
    { name: "Joaquim Esteves", position: "2.º Secretário", imageUrl: 'joaquim.jpg', sector: "MAG" },
    { name: "José Pontes", position: "3.º Secretário", imageUrl: 'pontes.jpg', sector: "MAG" },
    { name: "Joana Pinho", position: "2° Secretária", imageUrl: 'joana.jpg', sector: "CFJ" },
    { name: "Tomás Oliveira", position: "Vogal", imageUrl: 'tomas.jpg', sector: "Desporto e Bem Estar" },
    { name: "Eduardo Pires", position: "Relator", imageUrl: 'pires.jpg', sector: "CFJ" },
    { name: "Bruna Costa", position: "1.º Secretaria", imageUrl: 'bruna.jpg', sector: "CFJ" },



    
    // ... more members
];

function filterSelection(sector) {
    const container = document.getElementById('team-container');
    container.innerHTML = '';

    if (sector === 'all') {
        const sectors = ["Presidência", "Política Educativa", "Cultura", "Desporto e Bem Estar", "Administração Interna", "Aveiro é Nosso", "Apoio aos Núcleos", "Comunicação e Imagem",   "CFJ","MAG"];
        sectors.forEach(sec => {
            container.innerHTML += `<h2 class="text-center my-4">${sec}</h2>`;
            teamMembers.forEach(member => {
                if (member.sector === sec) {
                    const cardHtml = `
                    <div class="col-sm-6 col-md-4 mb-4 d-inline">
                        <div class="row d-flex justify-content-center">
                            <div class="card w-75">
                                <img src="${member.imageUrl}" class="card-img-top" alt="${member.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${member.name}</h5>
                                    <p class="card-text">${member.position}</p>
                                </div>
        </div>
    </div>                  
</div>                  

                    `;
                    container.innerHTML += cardHtml;
                }
            });
        });
    } else {
        container.innerHTML += `<h2 class="text-center my-4">${sector}</h2>`;
        teamMembers.forEach(member => {
            if (member.sector === sector) {
                const cardHtml = `
                    <div class=" col-sm-6 col-md-4 mb-4 d-inline">
                    <div class="row d-flex justify-content-center">
                        <div class="card w-75">
                            <img src="${member.imageUrl}" class="card-img-top" alt="${member.name}">
                            <div class="card-body">
                                <h5 class="card-title">${member.name}</h5>
                                <p class="card-text">${member.position}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHtml;
            }
        });
    }
}

// Initially show all members grouped by sector
filterSelection('all');
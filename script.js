const teamMembers = [
    { name: "Carolina Vila Maior", position: "Vice-Presidente", imageUrl: "path_to_image1.jpg", sector: "Política Educativa" },
    { name: "Pedro Rei", position: "Vogal", imageUrl: "path_to_image2.jpg", sector: "Política Educativa"},
    { name: "Bianca Ramos", position: "Vogal", imageUrl: "path_to_image3.jpg", sector: "Política Educativa" },
    { name: "Wilson do Carmo", position: "Presidente", imageUrl: "path_to_image4.jpg", sector: "Presidência" },
    { name: "Margarida Cordeiro", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "Aveiro é Nosso" },
    { name: "Francisco Silveira", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "Desporto e Bem Estar" },
    { name: "Joana Regadas", position: "Vice-Presidente Adjunta", imageUrl: "path_to_image4.jpg", sector: "Presidência" },
    { name: "Paulo Judite", position: "Tesoureiro", imageUrl: "path_to_image4.jpg", sector: "Presidência" },
    { name: "Pedro Cruz", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "Comunicação e Imagem" },
    { name: "João Cruz", position: "Tesoureiro Adjunto", imageUrl: "path_to_image4.jpg", sector: "Presidência" },
    { name: "Gustavo Oliveira", position: "Secretário Geral", imageUrl: "path_to_image4.jpg", sector: "Presidência" },
    { name: "Carolina Alberto", position: "Administradora", imageUrl: "path_to_image4.jpg", sector: "Presidência" },
    { name: "Andreia Novais", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Aveiro é Nosso" },
    { name: "Guilherme Freitas", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "Apoio aos Núcleos" },
    { name: "Maria Ferreira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Apoio aos Núcleos" },
    { name: "Lénia Ferreira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Apoio aos Núcleos" },
    { name: "Joana Ferreira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Aveiro é Nosso" },
    { name: "Joana Aleixo", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Comunicação e Imagem" },
    { name: "Matilde Ferreira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Comunicação e Imagem" },
    { name: "Lucas Matos", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "Administração Interna" },
    { name: "Hugo Oliveira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Administração Interna" },
    { name: "Juan Carpintero", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Administração Interna" },
    { name: "Pedro Rocha", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "Cultura" },
    { name: "Maria Ferreira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Cultura" },
    { name: "Leonardo Salazar", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Cultura" },
    { name: "Luzia Ferreira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Desporto e Bem Estar" },
    { name: "Pedro Palavra", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Administração Interna" },
    { name: "Gonçalo Marques", position: "Presidente", imageUrl: "path_to_image4.jpg", sector: "MAG" },
    { name: "Nânci Marques", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "MAG" },
    { name: "Matilde Pinho", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Comunicação e Imagem" },
    { name: "Fábio Yu Chen", position: "Presidente", imageUrl: "path_to_image4.jpg", sector: "CFJ" },
    { name: "Miguel Martins", position: "Vice-Presidente", imageUrl: "path_to_image4.jpg", sector: "CFJ" },
    { name: "Inês Filipe", position: "1ª Secretaria", imageUrl: "path_to_image4.jpg", sector: "MAG" },
    { name: "Joaquim Esteves", position: "2° Secretário", imageUrl: "path_to_image4.jpg", sector: "MAG" },
    { name: "Joana Pinho", position: "2° Secretária", imageUrl: "path_to_image4.jpg", sector: "CFJ" },
    { name: "Tomás Oliveira", position: "Vogal", imageUrl: "path_to_image4.jpg", sector: "Desporto e Bem Estar" },
    { name: "Eduardo Pires", position: "Relator", imageUrl: "path_to_image4.jpg", sector: "CFJ" },
    { name: "Bruna Costa", position: "Relator", imageUrl: "path_to_image4.jpg", sector: "CFJ" },



    
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
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card">
                                <img src="${member.imageUrl}" class="card-img-top" alt="${member.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${member.name}</h5>
                                    <p class="card-text">${member.position}</p>
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
                    <div class="col-12 col-md-4 mb-4">
                        <div class="card">
                            <img src="${member.imageUrl}" class="card-img-top" alt="${member.name}">
                            <div class="card-body">
                                <h5 class="card-title">${member.name}</h5>
                                <p class="card-text">${member.position}</p>
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
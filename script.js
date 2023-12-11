const teamMembers = [
    { name: "Carolina Vila Maior", position: "Vice-Presidente", imageUrl: 'vilamaior.jpg', sector: "Política Educativa", curso:"Licenciatura em Biotecnologia" },
    { name: "Pedro Rei", position: "Vogal", imageUrl: 'rei.jpg', sector: "Política Educativa", curso:"Licenciatura em Engenharia Informática"},
    { name: "Bianca Ramos", position: "Vogal", imageUrl: 'bainca.jpg', sector: "Política Educativa" , curso:"Licenciatura em Contabilidade"},
    { name: "Wilson do Carmo", position: "Presidente", imageUrl: 'wison.jpg', sector: "Presidência", curso:"Mestrado em Ciências Biomédicas/Mestrado em Gestão" },
    { name: "Margarida Cordeiro", position: "Vice-Presidente", imageUrl: 'Margarida Cordeiro.jpg', sector: "Aveiro é Nosso", curso:"Mestrado em Línguas e Relações Empresariais" },
    { name: "Francisco Silveira", position: "Vice-Presidente", imageUrl: 'franciscosilveir-1.jpg', sector: "Desporto e Bem Estar", curso:"Mestrado em Ciências do Mar e da Atmosfera" },
    { name: "Joana Regadas", position: "Vice-Presidente Adjunta", imageUrl: 'regadas.jpg', sector: "Presidência", curso:"Mestrado em Engenharia Biomédica" },
    { name: "Paulo Judite", position: "Tesoureiro", imageUrl: 'judite.jpg', sector: "Presidência", curso:"Mestrado em Economia" },
    { name: "Pedro Cruz", position: "Vice-Presidente", imageUrl: 'pedrocruz___-1.jpg', sector: "Comunicação e Imagem", curso:"Mestrado em Audiovisual e Novos Média" },
    { name: "João Cruz", position: "Tesoureiro Adjunto", imageUrl: 'joaocruz.jpg', sector: "Presidência" , curso:"Mestrado Integrado em Enganharia Mecânica"},
    { name: "Gustavo Oliveira", position: "Secretário Geral", imageUrl: 'gustavo.jpg', sector: "Presidência", curso:"Mestrado em Assessoria de Direção e Comunicação nas Organizações" },
    { name: "Carolina Alberto", position: "Administradora", imageUrl: 'carolinaalberto.jpg', sector: "Presidência", curso:"Mestrado em Engenharia Biomédica" },
    { name: "Andreia Novais", position: "Vogal", imageUrl: 'Andreia Novais.jpg', sector: "Aveiro é Nosso", curso:"Mestrado em Gestão da Investigação Clínica" },
    { name: "Guilherme Freitas", position: "Vice-Presidente", imageUrl: 'Guilherme Freitas.jpg', sector: "Apoio aos Núcleos", curso:"Mestrado em Engenharia Química" },
    { name: "Maria Ferreira", position: "Vogal", imageUrl: 'Maria Ferreira.jpg', sector: "Apoio aos Núcleos", curso:"Mestrado em Gestão e Planeamento em Turismo" },
    { name: "Lénia Ferreira", position: "Vogal", imageUrl: 'lenia.jpg', sector: "Apoio aos Núcleos", curso:"Mestrado em Ensino de Matemátia 3ºCEB e Secundário" },
    { name: "Joana Ferreira", position: "Vogal", imageUrl: 'Joana Ferreira.jpg', sector: "Aveiro é Nosso", curso:"Licenciatura em Educação Básica" },
    { name: "Joana Aleixo", position: "Vogal", imageUrl: 'joanaaleixo-1.jpg', sector: "Comunicação e Imagem", curso:"Administração Pública" },
    { name: "Matilde Ferreira", position: "Vogal", imageUrl: 'matildepreto-1.jpg', sector: "Comunicação e Imagem", curso:"Licenciatura em Multimédia e Tecnologias da Comunicação" },
    { name: "Lucas Matos", position: "Vice-Presidente", imageUrl: 'lucasmatos.jpg', sector: "Administração Interna" , curso:"Mestrado Integrado em Engenharia de Computadores e Telemática"},
    { name: "Hugo Oliveira", position: "Vogal", imageUrl: 'hugooliveira.jpg', sector: "Administração Interna", curso:"Mestrado em Engenharia Mecânica" },
    { name: "Juan Carpintero", position: "Vogal", imageUrl: 'juan.jpg', sector: "Administração Interna", curso:"Licenciatura em Engenharia de Computadores e Informática" },
    { name: "Pedro Rocha", position: "Vice-Presidente", imageUrl: 'pedrorocha-1.jpg', sector: "Cultura" , curso:"Mestrado em Engenharia de Computadores e Telemática"},
    { name: "Maria Ferreira", position: "Vogal", imageUrl: 'mariaferreira-1.jpg', sector: "Cultura", curso:"Licenciatura em Gestão" },
    { name: "Leonardo Salazar", position: "Vogal", imageUrl: 'leo-1.jpg', sector: "Cultura", curso:"Liicenciatura em Fisioterapia" },
    { name: "Luzia Ferreira", position: "Vogal", imageUrl: 'luzia.jpg', sector: "Desporto e Bem Estar", curso:"Licenciatura em Engenharia e Gestão Industrial" },
    { name: "Pedro Palavra", position: "Vogal", imageUrl: 'pedropalavra.jpg', sector: "Administração Interna", curso:"Licenciatura em Design" },
    { name: "Gonçalo Marques", position: "Presidente", imageUrl: 'Goncalo.jpg', sector: "MAG", curso:"Mestrado em Engenharia Química- Processos Quimicos" },
    { name: "Nânci Marques", position: "Vice-Presidente", imageUrl: 'magnanci.jpg', sector: "MAG", curso:"Mestrado em Engenharia Geológica" },
    { name: "Matilde Pinho", position: "Vogal", imageUrl: 'matildepinho-1.jpg', sector: "Comunicação e Imagem", curso:"Licenciatura em engenharia de materiais " },
    { name: "Fábio Yu Chen", position: "Presidente", imageUrl: 'fabyo.jpg', sector: "CFJ", curso:"Mestrado em Ecotoxicologia e Análise de Risco" },
    { name: "Miguel Martins", position: "Vice-Presidente", imageUrl: 'migueçmartins.jpg', sector: "CFJ", curso:"Mestrado em Engenharia Informática" },
    { name: "Inês Filipe", position: "1.º Secretaria", imageUrl: 'inesfilipa.jpg', sector: "MAG", curso:"Licenciatura em Matemática " },
    { name: "Joaquim Esteves", position: "2.º Secretário", imageUrl: 'joaquim.jpg', sector: "MAG" , curso:"Licenciatura em Fisioterapia "},
    { name: "José Pontes", position: "3.º Secretário", imageUrl: 'pontes.jpg', sector: "MAG", curso:"Mestrado Integrado em Engenharia Civil" },
    { name: "Joana Pinho", position: "2° Secretária", imageUrl: 'joana.jpg', sector: "CFJ" , curso:"Licenciatura em Engenharia do Ambiente"},
    { name: "Tomás Oliveira", position: "Vogal", imageUrl: 'tomas.jpg', sector: "Desporto e Bem Estar", curso:"Mestrado em Engenharia Química" },
    { name: "Eduardo Pires", position: "Relator", imageUrl: 'pires.jpg', sector: "CFJ", curso:"Licenciatura em Design de Produto e Tecnologia" },
    { name: "Bruna Costa", position: "1.º Secretaria", imageUrl: 'bruna.jpg', sector: "CFJ", curso: "Mestrado em Marketing (PL)" },



    
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
                                    <h5 class="card-title"><strong>${member.name}</strong></h5>
                                    <p class="card-text">${member.position}</p>
                                    <p class="card-text">${member.curso}</p>
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
                            <h5 class="card-title"><strong>${member.name}</strong></h5>
                            <p class="card-text">${member.position}</p>
                                <p class="card-text">${member.curso}</p>

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
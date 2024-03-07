axios.get('https://api.disneyapi.dev/character/')
    .then(response => {
        const characters = response.data;
        characters.forEach(character => {
            console.log(`Nom du personnage : ${character.name}`);
            console.log(`Film : ${character.movie}`);
            console.log('----------------------');
        });
    })
    .catch(error => console.log(error));
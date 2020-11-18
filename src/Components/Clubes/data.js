const access = [
    "lycaon",
    "quynza",
    "titans"
]

const CLUBES = {
    "lycaon": {
        name: "Lycaon Pictus ",
        type: "Jugger Club",
        logo: `${process.env.PUBLIC_URL}/logos/Lycaon.png`,
        description: " Somos la Manada más competitiva de Jugger, si Quieres Conoser tus limites y sentir que cada entrenamiento es un Desafio te invitamos a unirtenos para Buscar  Juntos la Victoria.",
        responsable: "Juan Pablo Bedoya ",
        email: "lycaonpictusjuggerclub@jugger.co",
        contact: "322-3662053",
        socialmedia: [
            { type: "facebook", contact: "http://www.facebook.com/LycaonPictusJuggerTeam" },
            { type: "instagram", contact: "http://www.instagram.com/lycaonpictus_" },

        ]
    },

    "titans": {
        name: "Titans",
        type: "Jugger Club",
        logo: `${process.env.PUBLIC_URL}/logos/Titans.svg`,
        description: "Titans Jugger Club es actualmente el club más joven dentro de la comunidad, destacando su disciplina, unión y organización, cuenta así con tres equipos competitivos y solo está a la espera de que seas parte de esta gran familia. ",
        responsable: "Mateo Avilan",
        email: "titansjuggerclub@gmail.com",
        contact: ["321-9027905", " 300-4147645"],
        socialmedia: [
            { type: "facebook", contact: "http://www.facebook.com/Titansjuggerclub" },
            { type: "tiktok", contact: "https://vm.tiktok.com/ZSPFRBvj/" },
            { type: "instagram", contact: "http://www.instagram.com/titansjuggerclub" },
        ]

    },
    "connelle": {
        name: "Connelle",
        type: "Jugger Club",
        logo: `${process.env.PUBLIC_URL}/logos/Collapse.jpg`,
        description: " ",
        responsable: "Sebastián Mosquera",
        email: "lycaonpictus@gmail.com",
        contact: " 000-0000000 000-0000000",
        socialmedia: [

        ]

    },
    "raiders": {
        name: "Raiders",
        type: "Jugger Club",
        logo: `${process.env.PUBLIC_URL}/logos/Raiders.svg`,
        description: " ",
        responsable: "Sebastián Mosquera",
        email: "lycaonpictus@gmail.com",
        contact: " 000-0000000 000-0000000",
        socialmedia: [

        ]

    },

    "quynza": {
        name: "Quynza",
        type: "Jugger Club",
        logo: `${process.env.PUBLIC_URL}/logos/Quynza.svg`,
        description: "Sueña en grande, corre como nunca, deja todo de ti en el campo, veras que los obstáculos serán cada vez más pequeños y la victoria colosal; el poder de ser quynza se siente en la mente, cuerpo y corazón; somos Quynza jugger club y la aventura empieza en 3,2,1 ¡Jugger!",
        responsable: "Jenny Gil ",
        email: "quynzajuggerclub@jugger.co",
        contact: "312-3918610",
        socialmedia: [

        ]
    },
}

export { CLUBES, access };
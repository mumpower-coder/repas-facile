function trouverRepas() {

    let typeChoisi = document.getElementById("type").value;

    let repas = {
        tout: [
            {
    nom: "Steak haché 5% + courgettes poêlées + pomme de terre vapeur (≈ 480 kcal)",
    recette: "Fais cuire la pomme de terre 20 min à l’eau. Poêle les courgettes 8 min. Cuire le steak 2-3 min par face sans trop de matière grasse."
},
{
    nom: "Saumon au four + brocolis + citron (≈ 450 kcal)",
    recette: "Mets le saumon au four 15 min à 180°C avec citron. Fais cuire les brocolis vapeur ou eau 8 min."
},
{
    nom: "Riz complet + œufs brouillés + tomates (≈ 430 kcal)",
    recette: "Cuire le riz 20 min. Brouille 2 œufs à la poêle. Ajoute tomates crues en accompagnement."
},
{
    nom: "Poulet grillé + légumes + riz (≈ 450 kcal)",
    recette: "Fais cuire le riz 10 min. Grille le poulet à la poêle 5-6 min par face. Ajoute des légumes vapeur ou surgelés chauffés à la poêle."
},
            {
                nom: "Omelette champignons + yaourt (≈ 350 kcal)",
                recette: "Fais revenir les champignons 5 min. Ajoute 2 œufs battus et cuis 3 min. Accompagne d’un yaourt nature."
            }
        ],

        rapide: [
            {
    nom: "Skyr + banane + amandes (≈ 330 kcal)",
    recette: "Dans un bol mets un skyr nature, une banane en rondelles et une petite poignée d’amandes."
},
{
    nom: "Tartines pain complet + avocat + jambon (≈ 350 kcal)",
    recette: "Grille 2 tartines. Écrase l’avocat dessus et ajoute une tranche de jambon."
},
{
    nom: "Salade thon maïs crudités (≈ 340 kcal)",
    recette: "Mélange thon nature, maïs, salade verte et tomate. Assaisonne légèrement."
},
            {
                nom: "Omelette nature + fruit (≈ 300 kcal)",
                recette: "Bats 2 œufs, cuis 3 min à la poêle antiadhésive. Mange avec une pomme ou une poire."
            },
            {
                nom: "Fromage blanc + flocons d’avoine + pomme (≈ 320 kcal)",
                recette: "Dans un bol, mets 150g de fromage blanc, 30g d’avoine et une pomme coupée. Mélange et c’est prêt."
            }
        ],

        vege: [
            {
    nom: "Chili sin carne (≈ 400 kcal)",
    recette: "Fais revenir oignon, ajoute haricots rouges, tomates concassées et épices. Laisse mijoter 15 min."
},
{
    nom: "Omelette épinards fromage léger (≈ 360 kcal)",
    recette: "Fais tomber les épinards 5 min puis ajoute 2 œufs battus et un peu de fromage râpé léger."
},
{
    nom: "Pâtes complètes + sauce tomate maison (≈ 420 kcal)",
    recette: "Cuire les pâtes. Chauffe une sauce tomate simple avec herbes, ail et oignon."
},
            {
                nom: "Poêlée de légumes + œuf au plat (≈ 340 kcal)",
                recette: "Fais cuire des légumes surgelés 8 min à la poêle. Ajoute un œuf au plat par dessus."
            },
            {
                nom: "Salade lentilles + carottes râpées (≈ 360 kcal)",
                recette: "Rince les lentilles en conserve. Ajoute carottes râpées, sel, poivre et un filet d’huile d’olive."
            }
        ],

        tresleger: [
            {
    nom: "Fromage blanc 0% + fruits rouges (≈ 200 kcal)",
    recette: "Mélange 150g de fromage blanc 0% avec une poignée de fruits rouges."
},
{
    nom: "Omelette blancs d’œufs + champignons (≈ 230 kcal)",
    recette: "Cuire les champignons 5 min puis ajoute 3 blancs d’œufs battus."
},
{
    nom: "Salade concombre yaourt grec léger (≈ 220 kcal)",
    recette: "Coupe le concombre en rondelles et mélange avec yaourt grec léger, ail et citron."
},
            {
                nom: "Salade verte + thon + tomate (≈ 280 kcal)",
                recette: "Mélange salade, 1/2 boîte de thon au naturel et tomate. Assaisonne légèrement."
            },
            {
                nom: "Soupe de légumes maison + yaourt (≈ 250 kcal)",
                recette: "Fais cuire légumes (carotte, courgette, poireau) 20 min dans l’eau puis mixe. Ajoute un yaourt nature."
            }
        ]
    };

    let liste = repas[typeChoisi];

    let nombreAleatoire = Math.floor(Math.random() * liste.length);

    let choix = liste[nombreAleatoire];

    document.getElementById("resultat").innerText = choix.nom;
    document.getElementById("recette").innerText = choix.recette;
}
let boutonLike = document.getElementById("likeBtn");
let listeFavoris = document.getElementById("favoris");

let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

afficherFavoris();

boutonLike.addEventListener("click", function() {

    let repasActuel = document.getElementById("resultat").innerText;

    if (repasActuel && !favoris.includes(repasActuel)) {
        favoris.push(repasActuel);
        localStorage.setItem("favoris", JSON.stringify(favoris));
        afficherFavoris();
    }
});

function afficherFavoris() {
    listeFavoris.innerHTML = "";

    favoris.forEach(function(repas) {
        let li = document.createElement("li");
        li.innerText = repas;
        listeFavoris.appendChild(li);
    });
}

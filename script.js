function trouverRepas() {

    let typeChoisi = document.getElementById("type").value;

    let repas = {
        tout: [
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

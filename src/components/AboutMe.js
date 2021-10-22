import React, { useEffect } from 'react';

const AboutMe = () => {

    useEffect(() => {
        const img = document.querySelector('.content-img');
        const h2 = document.querySelector('.text-content h2');
        const h3 = document.querySelector('.text-content h3');
        const p = document.querySelectorAll('.text-content p');
        const animatedBeforeImage = document.querySelector('.before-img');
        const animatedAfterImage = document.querySelector('.after-img');

        img.style.transform = 'scale(1)';
        animatedBeforeImage.style.animation = "runBefore 0.8s linear"
        animatedAfterImage.style.animation = "runAfter 0.8s linear"

        setTimeout(() => {
            h2.style.transform = "translateX(0)";
        }, 500)
        setTimeout(() => {
            h3.style.transform = "translateY(0)";
        }, 300)
        p.forEach((e) => {
            e.style.transform = "translateY(0)"
        })

    }, [])


    return (
        <div className="content-me">
            <div className="text-content">
                <h2>Kevin Morize</h2>
                <h3>30 ans</h3>
                <p>Fraîchement reconverti dans le developpement web c'est avec engouement que j'élargis tous les jours mes compétences.</p>
                <p>Ayant suivi une formation professionnelle, j'ai commencé par les basiques pour m'orienter autour du Javascript, du React ainsi que du Node. J'aime travailler aussi bien sur du front que du back-end.</p>
                <p>Ce portfolio qui j'espère vous plaît me permet de mettre en avant certaines capacités mais reflète surtout ma persévérence dans l'apprentissage et la pratique. Il a été développé sans aucun framework, ligne par ligne.</p>
                <p>Travailleur acharné et passionné c'est avec plaisir que je relève les nouveaux défis. Si vous avez senti quelque chose en moi, n'hésitez surtout pas et allez sur la page contact.</p>
            </div>
            <div className="content-img">
                <img src="../assets/img/profil-pic.jpg" alt="profil-pic" />
                <div className="before-img"></div>
                <div className="after-img"></div>
            </div>

        </div>
    );
};

export default AboutMe;
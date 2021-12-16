import React, { useEffect } from 'react';

const AboutMe = (props) => {

    const [loaded, setLoaded] = useState(false);
    const isEnglish = props.english;

    useEffect(() => {

        const img = document.querySelector('.content-img');
        const h2 = document.querySelector('.text-content h2');
        const h3 = document.querySelector('.text-content h3');
        const p = document.querySelectorAll('.text-content p');
        const animatedBeforeImage = document.querySelector('.before-img');
        const animatedAfterImage = document.querySelector('.after-img');


        if (loaded) {
            if (window.matchMedia("(orientation:portrait)").matches) {
                animatedBeforeImage.style.animation = "runBefore 0.9s ease-in";
                animatedAfterImage.style.animation = "runAfter 1.1s ease-in";
            } else {
                animatedBeforeImage.style.animation = "runBefore 1.4s ease-in";
                animatedAfterImage.style.animation = "runAfter 1.5s ease-in";
            }  
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 20)
            setTimeout(() => {
                h2.style.transform = "translateX(0)";
            }, 500)
            setTimeout(() => {
                h3.style.transform = "translateY(0)";
            }, 300)
            p.forEach((e) => {
                e.style.transform = "translateY(0)"
            })
        }

    }, [isEnglish, loaded])


    return (
        <>
            {!isEnglish &&
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
                        <img src="../assets/img/profil-pic.jpg" alt="profil-pic" onLoad={() => setLoaded(true)}/>
                        <div className="before-img"></div>
                        <div className="after-img"></div>
                    </div>
                </div>
            }
            {isEnglish &&
                <div className="content-me">
                    <div className="text-content">
                        <h2>Kevin Morize</h2>
                        <h3>30 yo</h3>
                        <p>Freshly converted into web development, it is with enthusiasm that I broaden my skills every day.</p>
                        <p>Having followed a professional training, I started with the basics to orient myself around Javascript, React as well as Node. I like to work on the front as well as the back-end.</p>
                        <p>This portfolio, which I hope you like, allows me to highlight certain abilities but above all reflects my perseverance in learning and practicing. It was developed without any framework, line by line.</p>
                        <p>Hard worker and passionate, it is with pleasure that I take up new challenges. If you felt something in me, do not hesitate and go to the contact page.</p>
                    </div>
                    <div className="content-img">
                        <img src="../assets/img/profil-pic.jpg" alt="profil-pic" onLoad={() => setLoaded(true)}/>
                        <div className="before-img"></div>
                        <div className="after-img"></div>
                    </div>
                </div>
            }
        </>
    );
};

export default AboutMe;
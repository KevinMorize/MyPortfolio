import React from 'react';

const TraceContent = (props) => {
    const isEnglish = props.english
    return (
        <div className="trace-content">
            <div className='trace-title'>
                <div>
                    <h2>{!isEnglish ? "Rôle" : "Role"}</h2>
                    <p>{!isEnglish ? "developpeur" : "developer"}</p>
                </div>
                <div>
                    <h2>Date</h2>
                    <p>dec 2021</p>
                </div>
                <div>
                    <h2>{!isEnglish ? "Aperçu" : "Overview"}</h2>
                    <p>{!isEnglish ? "correction avant lancement" : "bug fixing before launch"}</p>
                </div>
            </div>
            <img src="../assets/img/about/trace1.png" alt="trace-img" />
            {/* <div className="trace-image-container">
                <img src="../assets/img/about/trace2.png" alt="trace-img2" />
                <img src="../assets/img/about/trace3.png" alt="trace-img3" />
            </div> */}
        </div>
    );
};

export default TraceContent;
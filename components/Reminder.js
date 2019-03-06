
const Reminder = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <h3>Be an active citizen now</h3>
                            <h1>Let your voice count <br/>in 3 minutes.</h1>
                        </div>
                        <div className="col-md-3">
                            <a href="#">
                                <button className="btn b-button-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Rate Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                section {
                    margin-top: 50px;
                    padding: 60px;
                    background-color: #0ca9b0;
                    color: white;
                }

                section .col-md-3 {
                    padding: 60px;
                }
                
                section h3 {
                    color: white;
                    font-size: 20px;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    margin-bottom: 20px;
                }
                
                section h1 {
                    font-size: 45px;
                    font-weight: 600;
                }
                
                section button {
                    width: 200px;
                    color: #053E5F;
                    background-color: white;
                    border: 0px;
                    border-radius: 7px;
                    padding: 10px;
                    font-size: 20px;
                }
            `}</style>
        </div>
    );
}

export default Reminder;
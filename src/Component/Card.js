import cardimg from '../images/gallery.png';

function myCard() {
    return (
        <>
        <div className="col-md-4 mb-4">
            
            <div className="card-body text-center shadow rounded p-4 ">
              <img src={cardimg} className="img-fluid"/>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
          </>
    );
  }
  
  export default myCard;
  




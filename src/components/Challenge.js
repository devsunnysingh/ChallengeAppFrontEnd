function Challenge({challenge}) {
    return(
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{challenge.month}</h5>
        </div>
        <p className="mb-1">{challenge.description}</p>
      </a>


    ); 
}
export default Challenge;
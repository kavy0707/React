import React from 'react'

function Newsbar(props) {

    let { title, description, imgurl, newsurl, author, publishedAt } = props
    return (

        <div>
            <div className="card container" style={{ marginTop: "37px" }}>
                <img src={imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="card-footer">
                        <small className="text-body-secondary">updated by {author ? author : undefined} at {publishedAt}</small>
                    </div>
                    <a href={newsurl} target='_blank' className="btn btn-sm btn-primary mt-3">Read more</a>
                </div>
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light" style={{
                    width: "54px",
                    marginLeft: "-13px",
                    borderRadius: "51px",
                    height: "29px",
                    color: "white",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center"
                }}>+99
                </span>
            </div>
        </div >
    )

}

export default Newsbar;

/*Передаем в качестве пропса список с рисунками*/
function Head(props) {
    const listImg = ["logo_dvfu.png", "logo_imct.png"]
    const logoImages =listImg.map((img, index) =>
        <img key={index} src={'./images/' + img}  alt=""/>
    );
    return(
        <div className="head">
            {logoImages}
        </div>
    )
}

export default Head;
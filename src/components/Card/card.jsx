import style from "./css_card.module.css"
function Card({ iteam, index }) {
    return (
       
        <div key={index} className={style.card}>
            <section className={style.main}>
                <img src={iteam.URL} alt=""  />
                <div className={style.cardText}>
                    <h4>{iteam.Name}</h4>
                    <span>{iteam.Year}</span>
                    <span>{iteam.Timeing}</span>
                    <span>{iteam.Genres}</span>
                    <span style={{border:"2px solid",width:"50%",textAlign:"center"}}>{iteam.Language}</span>
                </div>
            </section>


        </div>
        
    )
}
export default Card;
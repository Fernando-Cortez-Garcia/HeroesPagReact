import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByid } from "../helpers";
import { useMemo } from "react";

export const Heroepage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const hero = useMemo( ()=> getHeroByid(id),[id]);

    const onReturn= () =>{
        navigate(-1);
    }




    if(!hero){
        return <Navigate to="/marvel"/>

    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} 
                className="img-thumbnail animate__animated animate__fadeInLeft" />

            </div>

            <div className="col-8 animate__animated animate__slideInUp">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li><b>Publisher:</b> {hero.publisher}</li>
                    <li><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-danger"
                    onClick={onReturn}>
                    Return
                </button>
            </div>

        </div>
       
    )

}
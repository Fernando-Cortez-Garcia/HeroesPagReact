import { HeroList } from "../components"

export const DcPage = () => {
    return (
        <>
            <h1 className="mt-4">DC HEROES COMICS</h1>
            <hr/>

            <HeroList publisher='DC Comics' />

        </>
       
    )
}
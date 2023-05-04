import { HeroList } from "../components"

export const MarvelPage = () => {
    return (
        <>
            <h1 className="mt-4">MARVEL HEROES COMICS</h1>
            <hr/>

            <HeroList publisher='Marvel Comics' />

        </>
    )
}
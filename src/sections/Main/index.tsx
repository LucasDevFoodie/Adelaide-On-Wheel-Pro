import { Hero } from "./Hero";
import { Video } from "./Video";
import { School } from "./School";
import { Shop } from "./Shop";
import { Label } from "../../components/Label";

export const Main = () => {
    return(
        <main>
            <Hero></Hero>
            <Video></Video>            
            <Label>
            <School></School>
            <Shop></Shop>
            </Label>            
        </main>
    )
}


import Button from "../UI/Button/Button";
import {
    HeroContainerStyled,
    HeroImageContainerStyled,
    HeroTextContainerStyled,
} from "./HeroStyles";

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroTextContainerStyled>
                <h1>Pizza Paradise</h1>
                <h2>Your favorite pizza delivered</h2>
                <p>
                    Experience the best flavors with our wide variety of pizzas
                </p>
                <Button radius="10">Ver más</Button>
            </HeroTextContainerStyled>

            <HeroImageContainerStyled>
                <img
                    src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png"
                    alt="Imagen del hero"
                />
            </HeroImageContainerStyled>
        </HeroContainerStyled>
    );
};

export default Hero;

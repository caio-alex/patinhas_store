import styled from "styled-components"

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
`;

const TextoHero = styled.div`
    width: 50vw;
    color: #6a6fd8;
    p{
        color: #3d42a1;
    }
    span{
        color: #e6b553;
    }
    @media(max-width: 600px) {
        width: 80vw;
    }
`;

const ImagemHero = styled.div`
    @media(max-width: 600px) {
        display: none;
    }
`;

export function HeroSection() {
    return (
        <Hero>
        <TextoHero>
            <h1>Cuide do Seu Pet com <span>Amor!</span></h1>
            <p>Na Patinhas Store, você encontra tudo o que seu pet precisa para ser feliz e saudável!</p>
        </TextoHero>
        <ImagemHero>
            <img src='https://png.pngtree.com/png-vector/20240705/ourmid/pngtree-dog-and-cat-friends-portrait-ginger-kitten-sitting-looking-at-each-png-image_12667174.png'></img>
        </ImagemHero>
        </Hero>
    )
}
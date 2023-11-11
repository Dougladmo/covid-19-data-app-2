import { StyledCard } from './Card.style';
import { StyledText, StyledTitle } from './Text.style';

const RegionCard = ({state, infecteds, presunts}) => {

  return (
    <StyledCard>
        <StyledTitle> {state}  </StyledTitle>
        <StyledText>Numero de infectados: {infecteds} </StyledText>
        <StyledText>Contagem de presuntos: {presunts} </StyledText>
    </StyledCard>
  );
}

export default RegionCard;
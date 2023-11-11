import { Button } from 'react-native';
import { StyledRegionCard } from './Card.style';
import { StyledRegionTitle } from './Text.style';

const RegionCard = ({ region, handleOnPress }) => {

  return (
    <StyledRegionCard>
        <StyledRegionTitle> {region}  </StyledRegionTitle>
        <Button title='ver' color='#fff' onPress={handleOnPress} />
    </StyledRegionCard>
  );
}

export default RegionCard;
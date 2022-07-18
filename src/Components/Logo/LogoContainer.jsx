import { React } from 'reuse/Packages';
import Image from 'Components/Image/Image';
import LogoPath from 'assets/images/logo.jpg';
import StyledLogoContainer from 'Components/Logo/Logo.Container.Style';

/**
 * @description return Logo Container with Logo inside
 *
 * @returns {JSX}  Logo Container component
 */
function LogoContainer() {
  return (
    <StyledLogoContainer>
      <Image imagePath={LogoPath} />
    </StyledLogoContainer>
  );
}
export default LogoContainer;

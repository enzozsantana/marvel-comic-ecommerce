import { Container } from './styles';

export default function Spinner() {
  return (
    <Container>
      <img src="/images/marvel-spinner.png" alt="spinner" />

      <div>
        <span>Loading</span>
        <span id="first-dot">.</span>
        <span id="second-dot">.</span>
        <span id="third-dot">.</span>
      </div>
    </Container>
  );
}
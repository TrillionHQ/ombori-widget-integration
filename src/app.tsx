import { useSettings } from "@ombori/ga-settings";
import { TrillionSchema } from "./schema";
import styled from "styled-components";
import { TrillionWidget } from "trillion-widget";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

function App() {
  const settings = useSettings<TrillionSchema>();

  const carouselIds = settings?.carouselIds;

  if (!settings) {
    return <Container>Loading gridapp settings...</Container>
  }

  return (
    <Container>
      <TrillionWidget
        widgetMode="two_hands"
        carousel={carouselIds}
      />
    </Container>
  );
}

export default App;

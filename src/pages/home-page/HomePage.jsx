import slides from "../../data/home-page.json";
import { Carousel, DescriptionSection, PageLayout } from "../../components";

export const HomePage = () => {
  return (
    <PageLayout>
      <Carousel slides={slides} />
      <DescriptionSection />
    </PageLayout>
  );
};

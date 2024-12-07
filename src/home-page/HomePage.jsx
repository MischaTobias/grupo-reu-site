import { Carousel, PageLayout } from "../components";
import { DescriptionSection } from "./components";

const slides = [
  {
    title: "Expertos en Derecho Migratorio",
    description: "Su camino hacia nuevas oportunidades",
    image: "./assets/gruporeuteam.jpg",
  },
  {
    title: "Nuestra meta",
    description:
      "Ayudar a los individuos y familias a pasar por el proceso de inmigración",
    image: "./assets/photo2.jpg",
  },
  {
    title: "Diversidad de servicios",
    description: "Desde obtener su residencia hasta la naturalización",
    image: "./assets/photo3.jpg",
  },
];

export const HomePage = () => {
  return (
    <PageLayout>
      <Carousel slides={slides} />
      <DescriptionSection />
    </PageLayout>
  );
};

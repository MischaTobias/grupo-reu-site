import { Carousel, DescriptionSection, PageLayout } from "../../components";

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
    image: "./assets/gruporeuteam2.jpg",
  },
  {
    title: "Diversidad de servicios",
    description: "Desde obtener su residencia hasta la naturalización",
    image: "./assets/gruporeuteam3.jpg",
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

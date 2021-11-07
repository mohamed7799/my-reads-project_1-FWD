import CategorySection from "./categorySection";

const MainContent = () => {
  return (
    <section className="max-w-7xl mx-auto my-6 w-11/12">
      <CategorySection categoryName="Currently Reading"></CategorySection>
      <CategorySection categoryName="Want To Read"></CategorySection>
      <CategorySection categoryName="Read"></CategorySection>
    </section>
  );
};

export default MainContent;

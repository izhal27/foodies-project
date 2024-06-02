export default function MealDetails({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Meal details [{params.slug}]
      </h1>
    </main>
  );
}

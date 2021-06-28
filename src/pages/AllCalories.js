import CalorieList from '../components/calories/CalorieList';

const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'This is a first calorie',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    description:
      'First description!',
  },
  {
    id: 'c2',
    title: 'This is a second calorie',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    description:
      'First description!',
  },
];

function AllCaloriesPage() {
  return (
    <section>
      <h1>All Calories</h1>
      <CalorieList calories={DUMMY_DATA} />
    </section>
  );
}

export default AllCaloriesPage;
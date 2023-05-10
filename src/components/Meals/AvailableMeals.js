import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Fish and rice very nice',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Fried Chicken',
      description: 'Fried, and chickeny',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Burger',
      description: 'Bread and meat',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Poke Bowl',
      description: 'Veggies, fish and rice etc.',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />);

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;
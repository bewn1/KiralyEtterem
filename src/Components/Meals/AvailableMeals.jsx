import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useContext} from "react";
import CartContext from "../../Store/Cart-context";

const DUMMY_MEALS = [
  {
      id: 'm1',
      name:'Májgombócleves zöldségekkel',
      description:'Sertésmáj és friss zöldségek',
      price:1600,
      species: 'leves',
  },
  {
      id: 'm2',
      name:'Hideg erdei gyümölcsleves',
      description:'Bogyós gyümölcsök és alma',
      price:1200,
      species: 'leves',
  },
  {
      id: 'm3',
      name:'Sajtkrémleves',
      description:'Füstöltsajt és trapista sajt',
      price:1300,
      species: 'leves',
  },
  {
      id: 'm4',
      name:'Rántott csirkemell',
      description:'Csirkemell aranybarna bundában',
      price:2290,
      species: 'frissensult',
  },
  {
      id: 'm5',
      name:'Grillezett csirkemell',
      description:'Natúr csirkemell, tüzön grillezve',
      price:2290,
      species: 'frissensult',
  },
  {
      id: 'm6',
      name:'Rántott sertéskaraj',
      description:'Sertéskaraj aranybarna bundában',
      price:2090,
      species: 'frissensult',
  },
  {
      id: 'm7',
      name:'Rántott sajt',
      description:'Trapista sajt aranybarna bundában',
      price:2300,
      species: 'frissensult',
  },
  {
      id: 'm8',
      name:'Rántott camamber',
      description:'Camamber sajt aranybarna bundában',
      price:2400,
      species: 'frissensult',
  },
  {
      id: 'm9',
      name:'Rántott zöldségek',
      description:'Karfiol, gomba és cukkini aranybarna bundában',
      price:2000,
      species: 'frissensult',
  },
  {
      id: 'm10',
      name:'Sajtal-sonkával töltött sertéskaraj',
      description:'Sertéskaraj pármai sonkábal és chedar sajtal töltve aranybarna bundában',
      price:2500,
      species: 'frissensult',
  },
  {
      id: 'm11',
      name:'Parasztosan',
      description:'Sertéskaraj baconnal, kolbásszal, lilahagymával és trapista sajtal töltve aranybarna bundában',
      price:2690,
      species: 'frissensult',
  },
  {
      id: 'm12',
      name:'Pikáns csomag',
      description:'Sertéskaraj juhtúróval, jalapeno paprikával és trapista sajtal töltve aranybarna bundában',
      price:2690,
      species: 'frissensult',
  },
  {
      id: 'm13',
      name:'A séf ajánlása',
      description:'Sertéskaraj pármai sonkával, baconnel, gombával, csemegeuborkával, hagymával és trapista sajttal töltve aranybarna bundában',
      price:3000,
      species: 'frissensult',
  },
  {
      id: 'm14',
      name:'Standard tál',
      description:'Sertéskaraj, csirkemell és két trapista sajt aranybarna bundában, vegyes körettel tálalva',
      price:5500,
      species: 'talak',
  },
  {
      id: 'm15',
      name:'Könnyed tál',
      description:'Grillezett csirkemell, grillezett halfilé, rántott zöldségekkel, rizzsel és grillezett zöldségekkel ',
      price:7000,
      species: 'talak',
  },
  {
      id: 'm16',
      name:'Király alap burger',
      description:'Prémium magvas burger, 100% marhaburger, paradicsom, cheddar sajt, savanyú uborka, saláta, hamburger szósz ',
      price:2990,
      species: 'burgerek',
  },
  {
      id: 'm17',
      name:'Király extra burger',
      description:'Prémium magvas burger, 100% marhaburger, paradicsom, cheddar sajt, lilahagymalekvár, savanyú uborka, saláta, BBQ szósz ',
      price:3500,
      species: 'burgerek',
  },
  {
      id: 'm18',
      name:'Király kentucky burger',
      description:'Prémium magvas burger, kentucky csirkemell, paradicsom, cheddar sajt, savanyú uborka, saláta, mézes-mustáros szósz ',
      price:3150,
      species: 'burgerek',
  },
];


const AvailableMeals = () => {
 const ctx = useContext(CartContext);
  const setCartHandler = (data) => {
   ctx.addItem(data);
  }

  const mealList = DUMMY_MEALS.map((meal) =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      setCart={setCartHandler}
    />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  )
};

export default AvailableMeals;
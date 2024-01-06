import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Fantasztikus ételek házhozszállítással</h2>
      <p>
        Válaszd ki kedvenc ételedet, vagy próbálj ki valami újat az éttermünk
        kínálatából és rendeld meg tőlünk, mi elkészítjük neked.
      </p>
      <p>
        Ételeink minőségi alapanyagokból készülnek, zöldségein és gyümölcseinket
        a helyi kistermelőktől vásároljuk ezzel támogatva munkájukat.
      </p>
    </section>
  );
};

export default MealsSummary;

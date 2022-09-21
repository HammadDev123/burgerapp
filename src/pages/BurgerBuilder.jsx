import Ingredients from "../components/Ingredients/Ingredients";
import Controls from "../components/Controls/Controls";
import { useRef } from 'react';

const BurgerBuilder = () => {

  const onAddIngredients = (type) => {
    childRef.current.Addingredients(type);
    console.log('hello world')
  }

  const onRemoveIngredients = (type) => {
    childRef.current.Removeingredients(type);
  }

  const childRef = useRef(null);

  return (
    <>
      <Ingredients ref={childRef} />
      <Controls addMethod={onAddIngredients} removeMethod={onRemoveIngredients} />
    </>
  )
}

export default BurgerBuilder

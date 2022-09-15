import { Box, styled } from '@mui/material'
import { forwardRef, useImperativeHandle, useState } from 'react';

const BurgerTop = styled(Box)({
  height: 130,
  width: 600,
  background: '#ef6c00',
  borderRadius: '50% 50% 0 0',
  marginTop: '12px',
})

const BurgerBottom = styled(Box)({
  height: 100,
  width: 600,
  background: '#ef6c00',
  borderRadius: '0 0 30px 30px',
  marginTop: '12px'
})

const Lettuce = styled(Box)({
  height: 40,
  width: 650,
  background: '#228c1d',
  borderRadius: '20px',
  marginTop: '12px'
})

const Bacon = styled(Box)({
  height: 25,
  width: 550,
  background: 'brown',
  marginTop: '12px'
})

const Cheese = styled(Box)({
  height: 30,
  width: 700,
  background: '#d6bb22',
  borderRadius: '20px',
  marginTop: '12px'
})

const Meat = styled(Box)({
  height: 50,
  width: 600,
  background: '#702e05',
  borderRadius: '15px',
  marginTop: '12px'
})

const Container = styled(Box)({
  textAlign: "-webkit-center",
  height: 550,
  overflowY: 'scroll',
})

const Ingredients = forwardRef((props, ref) => {

  const [lettuceState, setLettuceState] = useState(0)
  const [baconState, setBaconState] = useState(0)
  const [cheeseState, setCheeseState] = useState(0)
  const [meatState, setMeatState] = useState(0)

  const render_component = (element, count) => {
    let arr = []
    for (var i = 0; i < count; i++)
      arr.push(element)
    return arr
  }

  useImperativeHandle(ref, () => ({
    Addingredients(type) {
      switch (type) {
        case 'lettuce':
          setLettuceState(prev => prev + 1)
          break
        case 'bacon':
          setBaconState(prev => prev + 1)
          break
        case 'cheese':
          setCheeseState(prev => prev + 1)
          break
        case 'meat':
          setMeatState(prev => prev + 1)
          break
        default:
          break;
      }
    },

    Removeingredients(type) {
      switch (type) {
        case 'lettuce':
          if (lettuceState > 0)
            setLettuceState(prev => prev - 1)
          break
        case 'bacon':
          if (baconState > 0)
            setBaconState(prev => prev - 1)
          break
        case 'cheese':
          if (cheeseState > 0)
            setCheeseState(prev => prev - 1)
          break
        case 'meat':
          if (meatState > 0)
            setMeatState(prev => prev - 1)
          break
        default:
          break
      }
    },
  }));

  return (
    <Container>
      <BurgerTop />
      {render_component(<Lettuce />, lettuceState)}
      {render_component(<Bacon />, baconState)}
      {render_component(<Cheese />, cheeseState)}
      {render_component(<Meat />, meatState)}
      <BurgerBottom />
    </Container>
  )
})

export default Ingredients

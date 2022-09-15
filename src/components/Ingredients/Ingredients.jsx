import { Box, styled } from '@mui/material'

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'

})


const Ingredients = () => {
  return (
    <>
      <Container>
        <BurgerTop />
        <Lettuce />
        <Bacon />
        <Cheese />
        <Meat />
        <BurgerBottom />
      </Container>
    </>

  )
}

export default Ingredients

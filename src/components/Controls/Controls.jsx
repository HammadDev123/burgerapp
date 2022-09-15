import { Box, styled, Button } from '@mui/material'

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#cf8f2e',
  width: '100%',
  height: 300,
  marginTop: '110px'
})

const ControlBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const ControlLabel = styled(Box)({
  display: 'flex',
  alignItems: 'left',
  width: 100,
  marginTop: '15px',
  fontWeight: 700,
  fontSize: 19
})

const MyButton = styled(Button)({
  marginLeft: '15px',
  marginRight: '10px',
  marginTop: '15px',
})

const Controls = (props) => {
  return (

    <Container>
      <h3>Current Price: <strong> 0.0 $ </strong> </h3>
      {controls.map((control) => {
        return (
          <ControlBox key={control.type}>
            <ControlLabel>{control.label}</ControlLabel>
            <MyButton variant="contained" color="error" onClick={() => { props.removeMethod(control.type) }}>Less</MyButton>
            <MyButton variant="contained" color="success" onClick={() => { props.addMethod(control.type) }}>More</MyButton>
          </ControlBox>
        )
      })}
    </Container>
  )
}

export default Controls

import React from 'react'
import { Header, Container, Button, Icon, Modal } from 'semantic-ui-react'
import CraftingPlan from './CraftingPlan'
import CraftingRequirements from './CraftingRequirements'
import { useMedia } from 'react-use-media'
import ItemSearch from './ItemSearch'

export default function CraftingSection({crafting, dispatch}) {
  const isWide = useMedia({ minWidth: 1100 })

  return (
    <Container textAlign='left' style={{paddingTop: '30px'}}>
      {!isWide && 
      <Modal style={{height: '80vh'}} trigger={<Button><Icon name='plus' />Add Items</Button>} closeIcon>
        <Modal.Header>Add an Item</Modal.Header>
        <Modal.Content>
          <ItemSearch dispatch={dispatch} maxHeight='80vh'/>
        </Modal.Content>
      </Modal>
      }
    {crafting.length === 0 ? 
      <Header size='huge'>Add recipes to craft...</Header>
      :
      <React.Fragment>
        <CraftingPlan items={crafting} dispatch={dispatch} />
        <CraftingRequirements items={crafting} />
      </React.Fragment>
    }
    </Container>
  )
}

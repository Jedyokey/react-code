import React from 'react'
import UseStateHook from '../components/UseStateHook'
import Counter from '../components/Counter'
import OnChange from '../components/OnChange'
import ColorPicker from '../components/ColorPicker'
import UpdateObject from '../components/UpdateObject'
import UpdateArrays from '../components/UpdateArrays'


const Hooks = () => {
   

  return (
    <div>
      <UseStateHook />
      <Counter />
      <OnChange />
      <ColorPicker />
      <UpdateObject />
      <UpdateArrays />


    </div>
  )
}

export default Hooks

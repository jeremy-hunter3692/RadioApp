import React, { useState } from 'react'

export default function DnDMenu() {
  const [menuOrder, setMenuOrder] = useState([])
  const [oldMenuOrder, setOldMenuOrder] = useState(['one', 'two', 'three'])
  const [currentIdx, setCurrentIdx] = useState()
  console.log('top', menuOrder)

  function handleOnDrag(e, item) {
    e.dataTransfer.setData('menuItem', item)
    console.log('drag', item)
  }

  function onDragOver(e) {
    e.preventDefault()
  }

  function dragEnd() {
    console.log('end:', currentIdx)
    //use currentIdx to splice array of menuOrder
    let item = oldMenuOrder[currentIdx]
    let fixed = oldMenuOrder.splice(currentIdx, 0)
  }

  function handleDragEnter(e, index) {
    console.log('enter:', index)
    setCurrentIdx(index)
  }

  function onDrop(e) {
    const item = e.dataTransfer.getData('menuItem')
    setMenuOrder([...menuOrder, item])
    const filter = oldMenuOrder.filter((x) => x != item)
    // console.log('filtered', filter)
    setOldMenuOrder(filter)
  }

  function menuItemCreator(name) {
    return (
      <div
        className='menuItem'
        draggable
        onDragStart={(e) => handleOnDrag(e, name)}
        key={name}
      >
        {name}
      </div>
    )
  }

  return (
    <>
      {oldMenuOrder.map((x) => {
        return menuItemCreator(x)
      })}
      <div className='menuHolder' onDrop={onDrop} onDragOver={onDragOver}>
        {menuOrder.map((item, index) => {
          return (
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, item)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={dragEnd}
              key={index}
            >
              {item}
            </div>
          )
        })}
        order/item dropping space right here boiiiiiiiiii
      </div>
    </>
  )
}

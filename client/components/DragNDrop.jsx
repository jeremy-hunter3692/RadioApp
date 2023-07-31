import React, { useState } from 'react'

export default function DnDMenu() {
  const [menuOrder, setMenuOrder] = useState(['1', '2', '3', '4', '5'])
  // const [oldMenuOrder, setOldMenuOrder] = useState(['one', 'two', 'three'])
  const [currentIdx, setCurrentIdx] = useState()
  console.log('top', menuOrder)

  function handleOnDrag(e, item) {
    e.dataTransfer.setData('menuItem', item)
  }

  function onDragOver(e) {
    e.preventDefault()
  }

  function dragEnd() {
    //use currentIdx to splice array of menuOrder
    // let item = oldMenuOrder[currentIdx]
    // let fixed = menuOrder.splice(currentIdx, 0, item)
    // console.log('end:', currentIdx, item, fixed)
  }

  function handleDragEnter(e, index) {
    console.log('enter:', index)
    setCurrentIdx(index)
    e.target.className = 'dropTarget'
  }

  function handleDragLeave(e, index) {
    e.target.className = 'menuItem'
  }

  function onDrop(e) {
    e.target.className = 'menuItem'
    const item = e.dataTransfer.getData('menuItem')
    console.log('Drop item:', item)
    //remove old thing first
    let temp = menuOrder.filter((x) => x != item)
    temp.splice(currentIdx, 0, item)
    console.log('fixed', temp)
    setMenuOrder(temp)
    // const filter = oldMenuOrder.filter((x) => x != item)
    // console.log('filtered', filter)
    // setOldMenuOrder(filter)
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
      {/* {oldMenuOrder.map((x) => {
        return menuItemCreator(x)
      })} */}
      <div className='menuHolder' onDrop={onDrop} onDragOver={onDragOver}>
        {menuOrder.map((item, index) => {
          return (
            <div
              className='menuItem'
              draggable
              onDragStart={(e) => handleOnDrag(e, item)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragLeave={(e) => handleDragLeave(e, index)}
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

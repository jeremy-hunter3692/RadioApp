import React, { useState } from 'react'

export default function DnDMenu() {
  const [menuOrder, setMenuOrder] = useState([
    // '1111111111',
    // '2222222222',
    // '3333333333',
    // '4444444444',
    // '5555555555',
  ])
  const [oldMenuOrder, setOldMenuOrder] = useState(['one', 'two', 'three'])
  const [currentIdx, setCurrentIdx] = useState()
  // console.log('top', menuOrder, oldMenuOrder)

  function handleOnDrag(e, item) {
    e.dataTransfer.setData('menuItem', item)
  }

  function onDragOver(e) {
    e.preventDefault()
  }

  function handleDragEnter(e, index) {
    // console.log('enter:', index)
    setCurrentIdx(index)
    e.target.className = 'dropTarget'
  }

  function handleDragLeave(e, index) {
    e.target.className = 'menuItem'
  }

  function onDrop(e) {
    e.target.className = 'menuItem'
    const item = e.dataTransfer.getData('menuItem')
    // console.log('Drop item:', item)
    //remove old thing first
    let temp = menuOrder.filter((x) => x != item)
    temp.splice(currentIdx, 0, item)
    setMenuOrder(temp)
  }

  function oldMenuItemCreator(name) {
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
      <div className='menuParent'>
        <div>
          {oldMenuOrder.map((x) => {
            return oldMenuItemCreator(x)
          })}
        </div>
        <div className='menuHolder' onDrop={onDrop} onDragOver={onDragOver}>
          {menuOrder.map((item, index) => {
            return (
              <div
                className='menuItem'
                draggable
                onDragStart={(e) => handleOnDrag(e, item)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragLeave={(e) => handleDragLeave(e, index)}
                // onDragEnd={dragEnd}
                key={index}
              >
                {item}
              </div>
            )
          })}
          This is where the new/final order will be an be re-arrangeable
        </div>
      </div>
    </>
  )
}

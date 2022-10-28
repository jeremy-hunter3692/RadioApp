import React, { useEffect } from 'react'

// let draggables = null
// let containers = null

export default function DragAndDrop() {
  function getDragBelowElement(container, y) {
    // console.log(container, y)
    const draggableElements = [
      ...container.querySelectorAll('.draggable:not(.dragging)'),
    ]
    // console.log(draggableElements)
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        // console.log(offset)
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element
  }

  function getTrackListOrder() {
    const order = [...document.querySelectorAll('.draggable')]
    let numbers = order.map((x) => x.outerHTML)
    console.log(numbers)
  }

  useEffect(() => {
    const draggables = document.querySelectorAll('.draggable')
    const containers = document.querySelectorAll('.dndcontainer')
    console.log('use,', draggables, containers)
    draggables?.forEach((draggable) => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
      })
    })

    draggables?.forEach((draggable) => {
      draggable.addEventListener('dragend', (e) => {
        draggable.classList.remove('dragging')
      })
    })

    containers?.forEach((container) => {
      container.addEventListener('dragover', (e) => {
        e.preventDefault()

        const belowElement = getDragBelowElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (belowElement == null) {
          container.appendChild(draggable)
        } else {
          container.insertBefore(draggable, belowElement)
        }
      })
    })
  }, [])

  return (
    <>
      <h1>Drag and Drop</h1>
      <div className='dndcontainer'>
        <p className='draggable' draggable='true'>
          1 item
        </p>
        <p className='draggable' draggable='true'>
          2 item
        </p>
        <p className='draggable' draggable='true'>
          3 item
        </p>
        <p className='draggable' draggable='true'>
          4 item
        </p>
      </div>

      <button onClick={getTrackListOrder}>Print</button>
    </>
  )
}

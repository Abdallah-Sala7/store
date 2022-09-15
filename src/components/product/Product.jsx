import { Tabs } from 'flowbite-react'
import React from 'react'

function Product() {
  return (
    <main className='py-40'>
      <Tabs.Group
        aria-label="Pills"
        style="pills"
      >
        <Tabs.Item
          active={true}
          title="Tab 1"
        >
          Content 1
        </Tabs.Item>
        <Tabs.Item title="Tab 2">
          Content 2
        </Tabs.Item>
        <Tabs.Item title="Tab 3">
          Content 3
        </Tabs.Item>
        <Tabs.Item title="Tab 4">
          Content 4
        </Tabs.Item>
        <Tabs.Item
          disabled={true}
          title="Tab 5"
        >
          Content 5
        </Tabs.Item>
      </Tabs.Group>
    </main>
  )
}

export default Product
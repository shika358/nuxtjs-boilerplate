import { mount } from '@vue/test-utils'
import Card from '~/components/Card.vue'
import { Person } from '~/types'

// Todo: classを作成して、mockするとかなんとか
class PersonData implements Person {
  id: number = 5
  firstName: string = 'first'
  lastName: string = 'name'
  contact = null
  gender: string = 'a'
  ipAddress: string = 'dsa'
  avatar: string = 'asd'
  address = null
}

describe('Card', () => {
  test('is a Vue instance', () => {
    const data = new PersonData()
    const wrapper = mount(Card, {
      propsData: {
        person: data
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

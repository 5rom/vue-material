import mountStringSlot from 'test/utils/mountStringSlot'
import mountTemplate from 'test/utils/mountTemplate'
import MdCheckbox from './MdCheckbox.vue'

test('should render the checkbox', async () => {
  const template = '<md-checkbox></md-checkbox>'
  const wrapper = await mountTemplate(MdCheckbox, template)

  expect(wrapper.hasClass('md-checkbox')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-checkbox md-theme="alt"></md-checkbox>'
  const wrapper = await mountTemplate(MdCheckbox, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})

test('should add id and for on input and label', async () => {
  const myId = 'my-id'
  const template = `<md-checkbox id="${myId}">Label</md-checkbox>`
  const wrapper = await mountTemplate(MdCheckbox, template)
  const input = wrapper.find('input')[0]
  const label = wrapper.find('label')[0]

  expect(input.hasAttribute('id', myId)).toBe(true)
  expect(label.hasAttribute('for', myId)).toBe(true)
})

test('should create a fallback id if not given', async () => {
  const wrapper = await mountStringSlot(MdCheckbox, 'Label')
  const createdId = wrapper.vm.$props.id
  const input = wrapper.find('input')[0]
  const label = wrapper.find('label')[0]

  expect(input.hasAttribute('id', createdId)).toBe(true)
  expect(label.hasAttribute('for', createdId)).toBe(true)
})

test('should create a fallback value if not given', async () => {
  const wrapper = await mountStringSlot(MdCheckbox, 'Label')
  const createdValue = wrapper.vm.$props.value

  expect(createdValue).toBe('on')
})

test('should create disabled and required classes', async () => {
  const wrapper = await mountStringSlot(MdCheckbox, 'Label', {
    propsData: {
      disabled: true,
      required: true
    }
  })

  expect(wrapper.hasClass('md-disabled')).toBe(true)
  expect(wrapper.hasClass('md-required')).toBe(true)
})

test('should bind id, name, disabled and required to the inner input', async () => {
  const wrapper = await mountStringSlot(MdCheckbox, 'Label', {
    propsData: {
      id: 'test',
      name: 'test',
      disabled: true,
      required: true
    }
  })
  const input = wrapper.find('input')[0]

  expect(input.hasAttribute('id', 'test')).toBe(true)
  expect(input.hasAttribute('name', 'test')).toBe(true)
  expect(input.hasAttribute('disabled', 'disabled')).toBe(true)
  expect(input.hasAttribute('required', 'required')).toBe(true)
})

test('should add and remove a value from model when model is an array by clicking on container', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model" value="2"></md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: ['1']
    }
  })
  const checkbox = wrapper.find(MdCheckbox)[0]
  const container = wrapper.find('.md-checkbox-container')[0]

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toEqual(['1', '2'])

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toEqual(['1'])
})

test('should add and remove a value from model when model is an array by clicking on label', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model" value="1">Label</md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: []
    }
  })
  const label = wrapper.find('label')[0]

  label.trigger('click')
  expect(wrapper.data().model).toEqual(['1'])

  label.trigger('click')
  expect(wrapper.data().model).toEqual([])
})

test('should toggle a checked class when checked', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model" value="1">Label</md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: ['1']
    }
  })
  const checkbox = wrapper.find(MdCheckbox)[0]
  const label = wrapper.find('label')[0]

  expect(checkbox.hasClass('md-checked')).toBe(true)

  label.trigger('click')
  await checkbox.vm.$nextTick()
  expect(checkbox.hasClass('md-checked')).toBe(false)
})

test('should bind "on" value when no value attribute is given', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model"></md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: null
    }
  })
  const checkbox = wrapper.find(MdCheckbox)[0]
  const container = wrapper.find('.md-checkbox-container')[0]

  expect(checkbox.vm.isSelected).toBe(false)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe('on')

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(null)
})

test('should toggle string values on model', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model" value="1"></md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: '1'
    }
  })
  const checkbox = wrapper.find(MdCheckbox)[0]
  const container = wrapper.find('.md-checkbox-container')[0]

  expect(checkbox.vm.isSelected).toBe(true)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(null)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe('1')
})

test('should toggle boolean model when checkbox do not have a value', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model"></md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: false
    }
  })
  const checkbox = wrapper.find(MdCheckbox)[0]
  const container = wrapper.find('.md-checkbox-container')[0]

  await checkbox.vm.$nextTick()

  expect(checkbox.vm.isSelected).toBe(false)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe(true)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(false)
})

test('should toggle boolean model when checkbox have true value', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model" :value="true"></md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: false
    }
  })
  const checkbox = wrapper.find(MdCheckbox)[0]
  const container = wrapper.find('.md-checkbox-container')[0]

  await checkbox.vm.$nextTick()

  expect(checkbox.vm.isSelected).toBe(false)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe(true)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(false)
})

test('should toggle boolean model when checkbox have false value', async () => {
  const template = `
    <div>
      <md-checkbox v-model="model" :value="false"></md-checkbox>
    </div>
  `
  const wrapper = await mountTemplate(MdCheckbox, template, {
    data: {
      model: false
    }
  })
  const checkbox = wrapper.find(MdCheckbox)[0]
  const container = wrapper.find('.md-checkbox-container')[0]

  await checkbox.vm.$nextTick()

  expect(checkbox.vm.isSelected).toBe(true)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(false)
  expect(wrapper.data().model).toBe(true)

  container.trigger('click')
  expect(checkbox.vm.isSelected).toBe(true)
  expect(wrapper.data().model).toBe(false)
})
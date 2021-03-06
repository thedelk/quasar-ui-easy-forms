export default {
  mode: 'edit',
  actionButtons: [],
  columnCount: 1,
  schema: [
    {
      id: 'testField',
      component: 'QInput',
      label: 'Type something',
      events: {
        input: (val, { $q }) => $q.notify(val),
        focus: (val, { id, label, $q }) => $q.notify(`focussed: 「${label}」 (id: ${id})`),
      },
    },
  ],
}

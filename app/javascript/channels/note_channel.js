import consumer from "channels/consumer"

export function subscribeToNote(noteId, updateCallback) {
  consumer.subscriptions.create({ channel: "NoteChannel", id: noteId }, {
    received(data) {
      updateCallback(data.content)
    }
  })
}

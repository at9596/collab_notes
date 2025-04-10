//  Generate by rails g stimulus note
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="note"
export default class extends Controller {
  static targets = ["content"]

  connect() {
    // console.log("I'm inside note controller")
  }
  update() {
    // firstly reset the time
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.save()
    }, 1000) // Auto-save after 1s pause
    
  }
  save(){
    const noteId= this.element.dataset.id;
    const content = this.contentTarget.value;
    fetch(`/notes/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("[name='csrf-token']").content,
      },
      body: JSON.stringify({ note: { content: content } })
    })
  }
}

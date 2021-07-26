import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Posts Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  connect () {
    super.connect()
    console.log("Post Controller")
  }

  static targets = [ "comment", "output", "list" ]

  comment() {
    this.outputTarget.textContent =
      `Hi, ${this.commentTarget.value}!`
  }

  search (event) {
    event.preventDefault()
    this.stimulate('ExampleReflex#search', this.commentTarget.value)
  }

}

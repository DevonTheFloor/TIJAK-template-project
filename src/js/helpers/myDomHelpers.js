
/**
 * Helper for create element
 * @param {String} tag - name of html markup you want to create
 * @returns {Function} - native javascript function create element
 * exemple: const myInput = dCrEl("input")
 */
export function dCrEl(tag) {
  return document.createElement(tag)
}

/**
 * Helper for targeted element by ID
 * @param {String} id - id of the targeted element
 * @returns {Function} - native javascript function get element
 * exemple: const target = dGEBId("targeted-elemnt")
 */
export function dGEBId(id) {
  return document.getElementById(id)
}

/**
 * Helper for sellected one element by css selector
 * @param {String} tag - name of the selector css
 * @returns {Function} - native javascript function select element
 * exemple: const target = dQySr("textarea")
 */
export function dQySr(tag) {
  return document.querySelector(tag)
}

/**
 * Helper for sellected many elements by css selctor
 * @param {String} tag - name of the selector css
 * @returns {Function} - native javascript function select elements
 * exemple: const targets = dQySrAl("p")
 */
export function dQySrAl(tag) {
  return document.querySelectorAll(tag)
}

export function dGEBCNa(name) {
  return document.getElementsByClassName(name)
}

export function dGEBNa(name) {
  return document.getElementsByName(name)
}

/**
 * This one have two args more
 * @param {Element} from - DOM element from who you want to insert
 * @param {String} where - localisation of the insert (afterbegin, beforeend, etc...look at https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML#param%C3%A8tres)
 * @param {String} tag - HTMLElement you want to insert
 * @returns {Function} - native javascript function for insert element
 * exemple: const myPara = isAdHl("main","afterbegin","<p>My naw paragraphe with isAdHl helper</p>")
 */
export function isAdHl(from, where, tag) {
  return from.insertAdjacentHTML(where, tag)
}
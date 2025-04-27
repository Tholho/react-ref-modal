# react-ref-modal - Requires React19+, TypeScript & TailwindCSS

https://www.npmjs.com/package/react-ref-modal
https://github.com/tholho/react-ref-modal

A simple modal plugin.

Default style can be overriden with tailwind class names.

# Installation

npm install react-ref-modal

# Example default usage

By default, the modal will place at top left of the window, it is strongly advised to add the tailwind classes 'self-center' & 'justify-self-center' to offer best user experience.

```
const openModalRef = useRef<HTMLButtonElement>(null);

...

<button ref={openModalRef} className="border mb-0 p-2 rounded self-auto border-gray-300 bg-gray-700 hover:bg-gray-500 active:translate-px" type="submit" onClick={createNewEmployeeOnSubmit}>Save</button>
<Modal openModalRef={openModalRef} className={self-center justify-self-center} message="Employee created!"></Modal>

```

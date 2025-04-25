# Documentation

This modal makes use of the useRef hook and the ability to pass it as prop thanks to React 19


# Example default Usage

By default, the modal will place at top left of the window, it is strongly advised to add the tailwind classes 'self-center' & 'justify-self-center' to offer best user experience.

```
const openModalRef = useRef<HTMLButtonElement>(null);

...

<button ref={openModalRef} className="border mb-0 p-2 rounded self-auto border-gray-300 bg-gray-700 hover:bg-gray-500 active:translate-px" type="submit" onClick={createNewEmployeeOnSubmit}>Save</button>
<Modal openModalRef={openModalRef} className={self-center justify-self-center} message="Employee created!"></Modal>

```

# Custom styling

You can tailor the style of the modal by simply adding a className prop to the Modal component and passing it whatever you need

```

<Modal className={self-center justify-self-center p-4 rounded-2xl text-2xl bg-gray-800 border border-gray-300 text-white} openModalRef={openModalRef} message="Employee created!"></Modal>

```

The button text and borders inherit the parent modal styling.
# Documentation

This modal makes use of the useRef hook and the ability to pass it as prop thanks to React 19


# Example default Usage

```
const openModalRef = useRef<HTMLButtonElement>(null);

...

<button ref={openModalRef} className="border mb-0 p-2 rounded self-auto border-gray-300 bg-gray-700 hover:bg-gray-500 active:translate-px" type="submit" onClick={createNewEmployeeOnSubmit}>Save</button>
<Modal openModalRef={openModalRef} message="Employee created!"></Modal>

```

# Custom styling

You can tailor the style of the modal by simply adding a className prop to the Modal component and passing it whatever you need

```

<Modal className={text-pink-500} openModalRef={openModalRef} message="Employee created!"></Modal>

```

This will override the white color with pink.

The button text and borders inherit the parent modal styling.
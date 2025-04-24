import { useEffect, useRef } from "react";
import "./ModalStyle.css"

export interface ModalProps {
    message: string;
    openModalRef: React.RefObject<HTMLButtonElement | null>;
    className?: string;
}

const escapeModalEvent = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
        document.body.classList.remove('modalOpened')
    }

}

const Modal: React.FC<ModalProps> = ({ message, openModalRef, className }) => {

    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const button = openModalRef.current;
        const modal = modalRef.current;

        if (button && modal) {
            const handleClick = () => {
                modal.showModal();
                document.body.classList.add("modalOpened");
            };

            button.addEventListener("click", handleClick);
            document.body.addEventListener("keydown", escapeModalEvent);

            return () => {
                button.removeEventListener("click", handleClick);
                document.body.removeEventListener("keydown", escapeModalEvent);
                modal.close();
            };
        }
    }, [openModalRef]);

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current?.close();
            document.body.classList.remove('modalOpened')
        }
    };
    return (
        <dialog className={`self-center justify-self-center p-4 rounded-2xl text-2xl bg-gray-800 border border-gray-300 text-white ${className}`}
            ref={modalRef}
        >
            <div className="flex flex-col">
                {message}
                <button onClick={closeModal} className="self-center w-fit mt-2 p-2 rounded border border-inherit">
                    Close
                </button>
            </div>
        </dialog>
    )
}

export default Modal
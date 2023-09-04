import { FC, ReactElement } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children?: ReactElement;
    toggle: () => void;
    title: string,
    modalSize: string,
    modalPadding: string,
    closeButtonPadding: string
}

export default function Modal(props: ModalProps): ReturnType<FC> {
    return (
        <>
            <div id="extralarge-modal" aria-hidden="true"
                className={`${"modal"} ${props.open ? "display" : "hidden"}  fixed top-0 left-0 right-0 z-50  w-full p-4 ${props.modalPadding} overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className={`relative w-full ${props.modalSize} max-h-full`}>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={props.onClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                {props.title}
                            </h3>
                        </div>
                        <div className="px-6 py-6 lg:px-8">
                            {props.children}
                        </div>

                        <div className={`btn-container ${props.closeButtonPadding}`}>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 ml-96 py-2.5 mr-0 mb-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={props.onClose}>Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
import { ToastContainer, Bounce } from 'react-toastify';

type MessagesContaienrProps = {
    children: React.ReactNode
}

export function MessagesContainer({ children }: MessagesContaienrProps) {

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            {children}
        </>
    )
}
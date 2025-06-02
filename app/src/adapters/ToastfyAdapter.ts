import { toast } from 'react-toastify';

export const showMessage = {

    success: (msg: string) => toast.success(msg),
    error: (msg: string) => toast.error(msg),
    warn: (msg: string) => toast.warn(msg),
    info: (msg: string) => toast.info(msg),
    warning: (msg: string) => toast.warning(msg),

    dark: (msg: string) => toast.dark(msg),
    light: (msg: string) => toast.loading(msg)
}
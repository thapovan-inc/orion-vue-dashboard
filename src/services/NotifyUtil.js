export default {
    toastSuccess(text) {
        return {
            group: 'notifications',
            type: 'success',
            title: 'Success',
            text: `<p>${text}</p>`,
            duration: 3000
        };
    },
    toastError(text) {
        return {
            group: 'notifications',
            type: 'error',
            title: 'Error',
            text: `<p>${text}</p>`,
            duration: 3000
        };
    },
    toastWarn(text) {
        return {
            group: 'notifications',
            type: 'warn',
            title: 'Notice',
            text: `<p>${text}</p>`,
            duration: 3000
        };
    },
};

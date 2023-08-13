import {useToast} from "vue-toastification";

export const translate = {
    methods: {
        __(key, replace = {}) {
            var translation = this.$page.props.language[key]
                ? this.$page.props.language[key]
                : key
            Object.keys(replace).forEach(function (key) {
                translation = translation.replace(':' + key, replace[key])
            });

            return translation
        },
    },
}

export const toast = useToast();


export const form = {
    methods: {
        submitForm(path, method, form) {
            form[method](path, {
                preserveScroll: true,
                onError: (errors) => {
                    Object.keys(errors).forEach(key => {
                        toast.error(errors[key])
                    });
                },
                onSuccess: () => form.reset(),
            })
        }
    }
}

export const initThemeSet =
    function initThemeSet() {
        if ((!('theme' in localStorage))) {
            localStorage.theme = 'light'
            if (document.getElementById('dark')) {
                document.getElementById('dark').classList.add('hidden')
                document.getElementById('light').classList.remove('hidden')
            }
        } else if (localStorage.theme === 'light') {
            if (document.getElementById('dark')) {
                document.getElementById('dark').classList.add('hidden')
                document.getElementById('light').classList.remove('hidden')
            }
            document.documentElement.classList.remove('dark')
        } else if (localStorage.theme === 'dark') {
            if (document.getElementById('dark')) {
                document.getElementById('dark').classList.remove('hidden')
                document.getElementById('light').classList.add('hidden')
            }
            document.documentElement.classList.add('dark')
        }
    }

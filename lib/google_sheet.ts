const apiUrl = 'https://script.google.com/macros/s/AKfycbyNcAMFLrx4bRaYbWNl7xwIiC8O4y_P-DbB4TWXXJrqZfbm-co7nCEJOuOo1jvWhxIb/exec';
export function googleSheet(form: any) {
    fetch(apiUrl, { method: 'POST', body: form })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}
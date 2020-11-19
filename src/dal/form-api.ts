import axios from 'axios'


const instanse = axios.create({
    baseURL: 'https://server-smtp-nodejs.herokuapp.com/',
});

export const formAPI = {
    sendForm(data: FormType) {
        console.log(data);
        return instanse.post('sendMessage', data)
    }
};

type FormType = {
    name: string;
    email: string;
    text: string
}

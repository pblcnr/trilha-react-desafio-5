import { api } from '../services/api';

export const getPosts = async () => {
    try {

        const {data} = await api.get('/posts'); 

        if(data){
            return data;
        }
        
        return [];
    } catch (error) {
        
        console.error('Erro ao obter posts:', error);

        return [];
    }


}

export const getPostBySlug = async (id) => {

    try {

        const { data } = await api.get(`/post/${id}`);

        if (data) {
            return data;
        }

        return {};

    } catch (error) {

        console.error(`Erro ao obter o post com ID ${id}:`, error);
        return {};

    }
}
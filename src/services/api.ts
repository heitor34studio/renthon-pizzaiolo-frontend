import axios, {AxiosError} from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenError } from './errors/AuthTokenError'
import { signOut } from '../contexts/AuthContext'
import { GetServerSidePropsContext } from 'next';
export function setupAPIClient(ctx:GetServerSidePropsContext | null){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://renthon-pizzaiolo-backend.onrender.com',
        headers:{
            Authorization: `Bearer ${cookies['@renthon.token']}`
        }
    })


    api.interceptors.response.use(response => {
        return response;
    }, (error:AxiosError)=>{
        if(error.response?.status === 401){
            //deslogar user
            if(typeof window !== undefined){
                signOut();
            }else{
                return Promise.reject( new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })
    return api;
}
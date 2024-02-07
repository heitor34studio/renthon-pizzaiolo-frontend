import { GetServerSideProps, GetServerSidePropsContext,GetServerSidePropsResult } from 'next'
import { parseCookies, destroyCookie } from 'nookies'
import { AuthTokenError} from '../services/errors/AuthTokenError'

export function canSSRAuth<P extends { [key: string]: any }>(fn:GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext):Promise<GetServerSidePropsResult<P>> =>{
        
        const cookies = parseCookies(ctx);
        const token = cookies['@renthon.token']
        if(!token){
            return{
                redirect:{
                    destination:'/',
                    permanent:false,
                }
            }
        }
        try{
            return await fn(ctx);
        }catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(ctx,'@renthon.token');
                return{
                    redirect:{
                        destination:'/',
                        permanent:false
                    }
                }
            }
        }
        return {
            props: {} as P,
          };
    }
}
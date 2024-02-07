import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import logoImg from '../../public/logo-png.png';
import {Input} from '../components/ui/input/index'
import {Button} from '../components/ui/Button/index'
import Link from 'next/link';
import { toast } from 'react-toastify';
import {useContext, FormEvent, useState} from 'react'
import {AuthContext} from '../contexts/AuthContext'
import { canSSRGuest } from '../utils/canSSRGuest';
export default function Home() {
  const {signIn} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  async function handleLogin(event:FormEvent) {
    event.preventDefault();
    if(email === '' || password === ''){
      toast.warning("Preencha todos os campos!")
      return;
    }
    setLoading(true);
    let data = {
      email,
      password
    }
    await signIn(data)
    setLoading(false)
  }
  return (
    <>
    <Head>
      <title>Home- Renthon Pizzaiolo</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="logo renthon pizzaiolo"className={styles.logo}/>
      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
            placeholder='Digite seu email'
            type='text' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Input
            placeholder='Digite sua senha'
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Button
            type="submit"
            loading={loading}
          >Acessar</Button>
        </form>
        <Link href="/signup" legacyBehavior>
          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
        </Link>
      </div>
    </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest( async (ctx) =>{
  console.log("teste")
  return{
    props:{}
  }
})
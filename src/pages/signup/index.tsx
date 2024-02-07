import { FormEvent, useState, useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../../../styles/Home.module.scss';
import logoImg from '../../../public/logo-png.png';
import {Input} from '../../components/ui/input/index'
import {Button} from '../../components/ui/Button/index'
import {AuthContext} from '../../contexts/AuthContext'
import { toast } from 'react-toastify';
import Link from 'next/link';
export default function SignUp() {
  const {signUp} = useContext(AuthContext);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  async function handleSignUp(event:FormEvent){
    event.preventDefault();
    if(name === ''||email ===''||password===''){
      toast.warning("Preencha todos os campos!")
      return;
    }
    setLoading(true)
    let data = {name,email,password}
    await signUp(data);
    setLoading(false)
  }
  return (
    <>
    <Head>
      <title>Cadastre-se- Renthon Pizzaiolo</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="logo renthon pizzaiolo"className={styles.logo}/>
      <div className={styles.login}>
        <h2>Criando sua Conta</h2>
        <form onSubmit={handleSignUp}>
          <Input
            placeholder='Digite seu nome'
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
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
        <Link href="/" legacyBehavior>
        <a className={styles.text}>Já possui uma conta? Faça Login</a>
        </Link>
      </div>
    </div>
    </>
  )
}

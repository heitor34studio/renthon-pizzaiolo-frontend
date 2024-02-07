import Head from "next/head";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from './styles.module.scss';
import { Header } from "../../components/Header";

import { canSSRAuth } from "@/src/utils/canSSRAuth";

import { FiUpload } from 'react-icons/fi'

import { setupAPIClient } from "@/src/services/api";
import { GetServerSidePropsContext } from 'next';
import { toast } from "react-toastify";

type ItemProps = {
    id:string;
    name:string;
}
interface CategoryProps{
    categoryList: ItemProps[];
}

export default function Product({categoryList}:CategoryProps){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState<File | null>(null);

    const [categories,setCategories] = useState(categoryList || null )
    const [categorySelected, setCategorySelected] = useState(0);

    function handleFile(e: ChangeEvent<HTMLInputElement>){
        if(!e.target.files){
            return;
        }
        const image = e.target.files[0];
        if(!image){
            return;
        }

        if(image.type === 'image/jpeg' || image.type === 'image/png'){
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));
        }
    }

    function handleCategory(event: ChangeEvent<HTMLSelectElement>){
        const selectedValue = Number(event.target.value);
        setCategorySelected(selectedValue)
    }

    async function handleRegister(event: FormEvent){
        event.preventDefault();
        try{
            const data = new FormData();
            if(name ===''||price ===''||description ===''||imageAvatar ===null){
                toast.error("Algo está faltando.")
                return;
            }
            data.append('name', name);
            data.append('price', price);
            data.append('description', description);
            data.append('category_id', categories[categorySelected].id);
            data.append('file', imageAvatar);

            const apiClient = setupAPIClient(null);

            await apiClient.post('/product',data)
            toast.success('Cadastrado com sucesso!')

        }catch(err){
            toast.error("Erro ao cadastrar")
        }

        setName('');
        setPrice('');
        setDescription('');
        setAvatarUrl('');
        setImageAvatar(null)
    }

    return(
        <>
            <Head>
                <title>Novo Produto - Renthon Pizzaiolo</title>
            </Head>
            <div>
                <Header/>
                <main className={styles.container}>
                    <h1>Novo Produto</h1>
                    <form className={styles.form} onSubmit={handleRegister}>

                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color="#fff" />
                            </span>

                            <input type="file" accept="image/png, image/jpeg"
                            onChange={handleFile}
                            /> 

                            {avatarUrl && (
                                <img
                                className={styles.preview}
                                src={avatarUrl}
                                alt="foto do produto"
                                width={250}
                                height={250}
                            
                                />
                            )}

                        </label>

                        <select value={categorySelected} onChange={handleCategory}>
                            {categories.map((item,index)=>{
                                return(
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>

                        <input type="text"
                        placeholder="Digite o Nome do Produto"
                        className={styles.input}
                        value={name} onChange={(e)=>setName(e.target.value)}
                        />
                        <input type="text"
                        placeholder="Preço do Produto"
                        className={styles.input}
                        value={price} onChange={(e)=>setPrice(e.target.value)}
                        />

                        <textarea 
                        placeholder="Descrição do Produto"
                        className={styles.input}
                        value={description} onChange={(e)=>setDescription(e.target.value)}
                        >

                        </textarea>

                        <button className={styles.buttonAdd} type="submit">
                            Cadastrar
                        </button>
                    </form>
                </main>
            </div>
        </>
    )
}
export const getServerSideProps = canSSRAuth(async(ctx: GetServerSidePropsContext)=>{
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/category');

    return{
        props:{
            categoryList:response.data
        }
    }
})
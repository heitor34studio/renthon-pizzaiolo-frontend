import ReactModal from 'react-modal'
import styles from './style.module.scss'

import { FiX } from 'react-icons/fi'

import { OrderItemProps } from '@/src/pages/dashboard'

interface ModalOrderProps{
    isOpen:boolean;
    onRequestClose: ()=>void;
    order?: OrderItemProps[];
    handleFinishOrder: (id:string) => void;
}

export function ModalOrder({isOpen,onRequestClose,order, handleFinishOrder}:ModalOrderProps){
    const customStyle ={
        content:{
            top:'50%',
            bottom:'auto',
            left:"50%",
            right:'auto',
            padding:'30px',
            transform:'translate(-50%,-50%',
            backgroundColor:'#1b130d'
        }
    }
    if(order == null){
        return(null);
    }
    return(
        <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyle}
        >
        <button 
        type="button" 
        onClick={onRequestClose}
        className='react-modal-close'
        style={{background:'transparent', border:0}}
        >
            <FiX size={45} color="#f34748" />
        </button>

        <div className={styles.container}>

            <h2>Detalhes do Pedido:</h2>
            <span className={styles.table}>
                Mesa: <strong>{order && order.length > 0 ? order[0].order.table : 'N/A'}</strong>

            </span>

            {order?.map(item=>(
                <section key={item.id} className={styles.containerItem}>

                    <span>{item.amout} - <strong>{item.product.description}</strong></span>
                    <span className={styles.description}>{item.product.description}</span>

                </section>
            ))}

            <button className={styles.buttonOrder} onClick={()=>handleFinishOrder(order[0].order_id)}>
                Concluir Pedido
            </button>

        </div>

        </ReactModal>
    )
}
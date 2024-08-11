import { useEffect, useState } from 'react'
import styles from './Formulario.module.css'

const Formulario = ({ calcularIMC }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    useEffect(() => {
        if (altura && peso) {
            setTimeout(() => {
                calcularIMC(altura, peso);
            }, 1500);
        }
    }, [altura, peso]);

    const alterarAltura = (evento) => {
        let value = evento.target.value;

        value = value.replace(/\D/g, '');
        value = value.slice(0, 3);

        if (value.length === 3) {
            value = value.replace(/(\d{1})(\d{2})/, '$1.$2');
        }
        setAltura(value);
    };

    const alterarPeso = (evento) => {
        let value = evento.target.value;

        value = value.replace(/\D/g, '');
        value = value.slice(0, 5);
        if (value.length === 5) {
            value = value.replace(/(\d{3})(\d{2})/, '$1.$2');
        } else if (value.length === 4) {
            value = value.replace(/(\d{2})(\d{2})/, '$1.$2');
        } else if (value.length === 3) {
            value = value.replace(/(\d{1})(\d{2})/, '$1.$2');
        }
        setPeso(value);
    };

    return (
        <form className="formulario-container">
            <div className={styles.campo}>
                <label>Altura (ex.: 1,70)</label>
                <input type="number" placeholder="Metros" value={altura} onChange={alterarAltura} />
            </div>
            <div className={styles.campo}>
                <label>Peso (ex.: 58,2)</label>
                <input type="number" placeholder="Quilos" value={peso} onChange={alterarPeso} />
            </div>
        </form>
    )
}

export default Formulario

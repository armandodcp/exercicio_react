import styles from './ResultadoImc.module.css'

function Resultado({ imc, classificacao }) {
    
    const classeResultado = (resultado) => {
        return classificacao === resultado ? styles.destaque : '';
    };

    return (
        <div className={styles.resultadoContainer}>
            {imc && (
                <>
                    <h2 className={styles.resultado}>Seu IMC é: {imc}</h2>
                    <div className={styles.tabelaImc}>
                        <h3>Veja a interpretação do IMC</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>IMC</th>
                                    <th>Classificação</th>
                                    <th>Obesidade (Grau)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={classeResultado('Abaixo do peso')}>
                                    <td>Menor que 18,5</td>
                                    <td>Magreza</td>
                                    <td>0</td>
                                </tr>
                                <tr className={classeResultado('Peso normal')}>
                                    <td>Entre 18,5 e 24,9</td>
                                    <td>Normal</td>
                                    <td>0</td>
                                </tr>
                                <tr className={classeResultado('Sobrepeso')}>
                                    <td>Entre 25,0 e 29,9</td>
                                    <td>Sobrepeso</td>
                                    <td>0</td>
                                </tr>
                                <tr className={classeResultado('Obesidade grau I')}>
                                    <td>Entre 30,0 e 34,9</td>
                                    <td>Obesidade</td>
                                    <td>I</td>
                                </tr>
                                <tr className={classeResultado('Obesidade grau II')}>
                                    <td>Entre 35,0 e 39,9</td>
                                    <td>Obesidade</td>
                                    <td>II</td>
                                </tr>
                                <tr className={classeResultado('Obesidade grau III')}>
                                    <td>Maior que 40,0</td>
                                    <td>Obesidade Grave</td>
                                    <td>III</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    )
}

export default Resultado;

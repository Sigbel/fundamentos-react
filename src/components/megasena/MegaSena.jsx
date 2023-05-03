import "./MegaSena.css"
import React from "react";

export default (props) => {

    const qtde_num = props.qtde_num

    const arr = []

    // Check qtde_num
    if (qtde_num == 0) {
        console.log("Quantidade de número deve ser diferente de 0")
    }
    else {
        do {
            const random_num = Math.floor(Math.random() * (60 - 1) + 1)

            if (!arr.includes(random_num)) {
                arr.push(random_num);
            }
        } while (arr.length < qtde_num)
    }

    const arr_mod = arr.sort((a,b) => a-b).join(" - ")

    return (
        <div className="MegaSena">
            <h3>Seus números da surpresinha são: </h3>
            <div><strong>{arr_mod}</strong></div>
        </div>
    )
}


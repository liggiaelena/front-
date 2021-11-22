export default function nextDate(plan, dayName){
    const nextdays =[];
    const d = new Date()
    const today = d.getDay();

    if(plan === "mensal"){
        const day = Number(dayName.slice(-2));
        if(d.getDate() > day){
            const aux =new Date(`${d.getMonth()+2}/${day}/${d.getFullYear()}`)
            if(aux.getDay() === 6){
                const x = aux.setDate(aux.getDate() + 2);
                nextdays.push(x)
            }
            else if(aux.getDay() === 0){
                const x = aux.setDate(aux.getDate() + 1);
                nextdays.push(x)
            }
            else{
                const x = aux.setDate(aux.getDate());
                nextdays.push(x)
            }

            for(let i=0; i<2; i++){
                let aux2 = aux.setMonth(aux.getMonth()+1)
                nextdays.push(aux2);
            }

        }
        else{
            const aux =new Date(`${d.getMonth()+1}/${day}/${d.getFullYear()}`)
            if(aux.getDay() === 6){
                const x = aux.setDate(aux.getDate() + 2);
                nextdays.push(x)
            }
            else if(aux.getDay() === 0){
                const x = aux.setDate(aux.getDate() + 1);
                nextdays.push(x)
            }
            else{
                const x = aux.setDate(aux.getDate());
                nextdays.push(x)
            }
        }
        return nextdays;
    }

    if(plan === "semanal"){
        let idDay;
        if(dayName === "Segunda") idDay = 1;
        if(dayName === "Quarta") idDay = 3;
        if(dayName === "Sexta") idDay = 5;
            
        if(idDay > today){
            const aux = d.setDate(d.getDate()+(idDay - today))
            nextdays.push(aux);

            for(let i=0; i<2; i++){
                let aux2 = d.setDate(d.getDate()+7)
                nextdays.push(aux2)
            }
        }
        if(idDay < today){
            const aux = d.setDate(d.getDate()+(idDay +7 - today))
            nextdays.push(aux);
            for(let i=0; i<2; i++){
                let aux2 = d.setDate(d.getDate()+7)
                nextdays.push(aux2)
            }
        }
        return nextdays;
    }
}
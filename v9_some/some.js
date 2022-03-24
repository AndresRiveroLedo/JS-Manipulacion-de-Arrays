//true o false si hay numero par
const numbers = [1,2,3,4];

//for
let answer = false;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    if(element % 2 === 0){
        answer = true;
        break;
    }
}
console.log(answer);

//------some------
//ejemplo 1
const answer2 = numbers.some((item) => item % 2 ===0);
console.log("respuesta: ", answer);

//ejemplo 2
const orders =[
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,

    },
    {
        customerName:"Zulema",
        total: 180,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    }
];

const answer3 = orders.some((item) => item.delivered);
console.log("respuesta 3", answer3);

//Ejemplo 3: comprobamos si la nueva cita coincide con alguna cita programada
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10), //new Date(año, mes, dia, hora)
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de Trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30), //new Date(año, mes, dia, hora, minutos)
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate:    new Date(2021, 1, 1, 21),
        title: "Cena"
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

//libreria date-fns para la manipulacion de fechas en javascript
//la instalamos desde la consola: npm i date-fns
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';


//Comparamos las citas para poder programar la nueva cita en la agenda.
const isOverlap = (newDate) =>{
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    });
}
console.log('isIverlap', isOverlap(newAppointment));//le pasamos como argumento newAppointment
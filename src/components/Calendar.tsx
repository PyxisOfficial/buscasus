import { useState } from "react";

import { Calendar } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";

export function DutyCalendar() {
    const [dates, setDates] = useState<Value>();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

    function dateFormatAux(dates: any) {
        let d = new Date(dates),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate()),
            year = '' + (d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${year}-${month}-${day}`;
    }

    function dateFormat(dates: any) {
        const allDates: string[] = [];

        dates?.map((e: Value) => {
            allDates.push(dateFormatAux(e));
        });

        console.log(allDates);
    }

    dateFormat(dates);

    return (
        <Calendar
            multiple
            value={dates}
            onChange={setDates}
            format="DD/MM/YYYY"
            months={months}
            weekDays={weekDays}
            className="green"
        />
    )
}
export const legend = [
    {
        face: "aqi1",
        rank:"Dobre",
        range:"0-50",
        bgcolor:"var(--legend-good)",
        description: "Jakość powietrza jest zadowalająca, zanieczyszczenie powietrza powoduje brak lub niskie ryzyko zagrożenia dla zdrowia. Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.",
     
    },
    {
        face: "aqi2",
        rank:"Umiarkowane",
        range:"51-100",
        bgcolor:"var(--legend-moderate)",
        description: "Jakość powietrza jest akceptowalna. Zanieczyszczenie powietrza może stanowić zagrożenie dla zdrowia w szczególnych przypadkach (dla osób chorych, osób starszych, kobiet w ciąży oraz małych dzieci). Warunki umiarkowane do aktywności na wolnym powietrzu.",

    },
    {
        face: "aqi3",
        rank:"Dostateczne",
        range:"101-150",
        bgcolor:"var(--legend-semi-unhealthy)",
        description: "Jakość powietrza jest dostateczna, zanieczyszczenie powietrza stanowi zagrożenie dla zdrowia (szczególnie dla osób chorych, starszych, kobiet w ciąży oraz małych dzieci) oraz może mieć negatywne skutki zdrowotne. Należy rozważyć ograniczenie (skrócenie lub rozłożenie w czasie) aktywności na wolnym powietrzu, szczególnie jeśli ta aktywność wymaga długotrwałego lub wzmożonego wysiłku fizycznego."
    },
    {
        face: "aqi3",
        rank:"Niezdrowe",
        range:"151-200",
        bgcolor:"var(--legend-unhealthy)",
        description: "Jakość powietrza jest zła, osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu. Pozostała populacja powinna ograniczyć do minimum wszelką aktywność fizyczną na wolnym powietrzu - szczególnie wymagającą długotrwałego lub wzmożonego wysiłku fizycznego.",
    },
    {
        face: "aqi4",
        rank:"Bardzo niezdrowe",
        range:"201-300",
        bgcolor:"var(--legend-very-unhealthy)",
        description: "Jakość powietrza jest bardzo zła i ma negatywny wpływ na zdrowie. Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu. Pozostała populacja powinna ograniczyć przebywanie na wolnym powietrzu do niezbędnego minimum. Wszelkie aktywności fizyczne na zewnątrz są odradzane. Długotrwała ekspozycja na działanie substancji znajdujących się w powietrzu zwiększa ryzyko wystąpienia zmian m.in. w układzie oddechowym, naczyniowo-sercowym oraz odpornościowym.",
    },
    {
        face: "aqi5",
        rank:"Toksyczne",
        range:"301+",
        bgcolor:"var(--legend-hazardous)",
        description: "Jakość powietrza jest bardzo zła i ma negatywny wpływ na zdrowie. Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu. Pozostała populacja powinna ograniczyć przebywanie na wolnym powietrzu do niezbędnego minimum. Wszelkie aktywności fizyczne na zewnątrz są odradzane. Długotrwała ekspozycja na działanie substancji znajdujących się w powietrzu zwiększa ryzyko wystąpienia zmian m.in. w układzie oddechowym, naczyniowo-sercowym oraz odpornościowym."
    }
];
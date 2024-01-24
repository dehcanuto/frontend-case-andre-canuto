export default defineEventHandler((event) => {
    return [
        {
            icon: "dashboard",
            label: "Dashboard",
            to: "/"
        },
        {
            icon: "calendario",
            label: "Calendário",
            to: "/calendario"
        },
        {
            icon: "descanso",
            label: "Descanso",
            to: "/descanso"
        },
        {
            icon: "projetos",
            label: "Projetos",
            to: "/projetos"
        },
        {
            icon: "times",
            label: "Times",
            to: "/times"
        },
        {
            icon: "integracoes",
            label: "Integrações",
            to: "/integracoes"
        },
        {
            icon: "beneficios",
            label: "Benefícios",
            to: "/beneficios"
        },
        {
            icon: "documentos",
            label: "Documentos",
            to: "/documentos"
        }
    ]
})
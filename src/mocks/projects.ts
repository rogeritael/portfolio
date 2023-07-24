import jjng from '../assets/projects/jjng.svg'
import pizzaria from '../assets/projects/pizza.svg'

export const projects = [
    {
        cover: jjng,
        project_name: 'JJNG - Operadora de Viagens',
        description: 'Landing page desenvolvida para operadora de viagens, exibindo informações da  agência e principais destinos',
        technologies: ['React', 'TypeScript', 'Styled-Components'],
        content_side: 'right',
        gitLink: 'https://github.com/rogeritael/Operadora-de-Viagens',
        prodLink: 'https://operadora-de-viagens.vercel.app/',
    },
    {
        cover: pizzaria,
        project_name: 'Topolinos Pizzaria',
        description: 'Sistema de pedidos com cardápio online para delivery de pizzaria',
        technologies:  ['React', 'TypeScript', 'Styled-Components', 'React Router', 'Context API'],
        content_side: 'left',
        gitLink: 'https://github.com/rogeritael/Topolinos-Pizzaria',
        prodLink: 'https://topolinos-pizzaria.vercel.app/',
    },
]
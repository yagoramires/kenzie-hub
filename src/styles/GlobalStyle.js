import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary:#FF577F ;
    --color-primary-focus:#FF427F ;
    --color-primary-negative: #59323F;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96 ;
    --gray-0: #F8F9FA ;
    --success: #3FE864;
    --negative: #E83F5B;

    --title-1: 16px;
    --title-2: 16px;
    --title-3: 16px;
    --title-4: 12px;
    --headline:  12px;
}   

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter'
}

body{
    background: var(--gray-4);
}
`;

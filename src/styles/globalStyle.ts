import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import QuicksandLight from '../assets/fonts/QuicksandLight.woff';
import QuicksandRegular from '../assets/fonts/QuicksandRegular.woff';
import QuicksandMedium from '../assets/fonts/QuicksandMedium.woff';
import QuicksandSemiBold from '../assets/fonts/QuicksandSemiBold.woff';
import QuicksandBold from '../assets/fonts/QuicksandBold.woff';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Quicksand';
        font-weight: 300;
        src: url('${QuicksandLight}') format('woff2')
    }

    @font-face {
        font-family: 'Quicksand';
        font-weight: 400;
        src: url('${QuicksandRegular}') format('woff2')
    }

    @font-face {
        font-family: 'Quicksand';
        font-weight: 500;
        src:url('${QuicksandMedium}') format('woff2')
    }
    @font-face {
        font-family: 'Quicksand';
        font-weight: 600;
        src: url('${QuicksandSemiBold}') format('woff2') 
    }
    @font-face {
        font-family: 'Quicksand';
        font-weight: 700;
        src: url('${QuicksandBold}') format('woff2') 
    }
    `;

export default GlobalStyle;

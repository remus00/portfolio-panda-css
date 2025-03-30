import { css } from '../../styled-system/css';
import { About } from '../components/sections/about';
import { Hero } from '../components/sections/hero';

export const HomePage = () => {
    return (
        <div
            className={css({
                display: 'flex',
                flexDir: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bg: 'background',
                h: 'fit',
                w: '100vw',
            })}
        >
            <Hero />
            <About />
        </div>
    );
};

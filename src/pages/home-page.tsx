import { css } from '../../styled-system/css';
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
        </div>
    );
};

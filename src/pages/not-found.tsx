import { Link } from 'react-router';
import { css } from '../../styled-system/css';

export const NotFound = () => {
    return (
        <div
            className={css({
                display: 'flex',
                flexDir: 'column',
                gap: '32px',
                alignItems: 'center',
                justifyContent: 'center',
                w: '100vw',
                h: 'dvh',
            })}
        >
            <p>Page not found</p>
            <Link to="/">Back to home</Link>
        </div>
    );
};

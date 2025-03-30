import { HTMLAttributes, ReactNode } from 'react';
import { css } from '../../../styled-system/css';

interface Props extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    button: ReactNode;
}

export const CutOutWrapper = ({ children, button, ...rest }: Props) => {
    return (
        <section
            className={css({
                pos: 'relative',
                display: 'flex',
                h: 'dvh',
                w: '100vw',
                bg: 'background',
            })}
            {...rest}
        >
            <div
                className={css({
                    pos: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bg: 'card',
                    w: {
                        base: 'calc(100vw - 32px)',
                        md: 'calc(100vw - 64px)',
                    },
                    h: {
                        base: 'calc(100dvh - 32px)',
                        md: 'calc(100dvh - 64px)',
                    },
                    borderRadius: '32px',
                })}
            >
                <div
                    className={css({
                        display: 'flex',
                        w: 'full',
                        h: 'full',
                        alignItems: 'center',
                        justifyContent: 'center',
                    })}
                >
                    {children}
                </div>
            </div>

            <div
                className={css({
                    pos: 'absolute',
                    bg: 'background',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: {
                        base: '16px',
                        md: '32px',
                    },
                    right: {
                        base: '16px',
                        md: '32px',
                    },
                    w: {
                        base: '120px',
                        md: '168px',
                    },
                    h: {
                        base: '120px',
                        md: '168px',
                    },
                    padding: '32px',
                    borderTopLeftRadius: '32px',
                })}
            >
                {button}
            </div>

            <div
                className={css({
                    pos: 'absolute',
                    bg: 'background',
                    w: '50px',
                    h: '50px',
                    bottom: {
                        base: '16px',
                        md: '32px',
                    },
                    right: {
                        base: '136px',
                        md: '200px',
                    },
                })}
            >
                <div
                    className={css({
                        h: 'full',
                        w: 'full',
                        bg: 'card',
                        borderBottomRightRadius: '32px',
                    })}
                />
            </div>

            <div
                className={css({
                    pos: 'absolute',
                    bg: 'background',
                    w: '50px',
                    h: '50px',
                    bottom: {
                        base: '136px',
                        md: '200px',
                    },
                    right: {
                        base: '16px',
                        md: '32px',
                    },
                })}
            >
                <div
                    className={css({
                        h: 'full',
                        w: 'full',
                        bg: 'card',
                        borderBottomRightRadius: '32px',
                    })}
                />
            </div>
        </section>
    );
};

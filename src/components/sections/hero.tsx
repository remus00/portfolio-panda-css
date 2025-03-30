import { css } from '../../../styled-system/css';
import { CutOutWrapper } from '../custom/cut-out-wrapper';

export const Hero = () => {
    return (
        <CutOutWrapper
            button={
                <p
                    className={css({
                        fontSize: '20px',
                        color: 'muted-foreground',
                        transition: 'all',
                        animationDuration: '300ms',
                        _hover: {
                            transform: 'scale(110%)',
                            color: {
                                base: 'black',
                                _dark: 'white',
                            },
                        },
                        cursor: 'pointer',
                    })}
                >
                    Get in <br /> touch
                </p>
            }
            id="home"
        >
            <div className={css({ display: 'flex', flexDir: 'column' })}>
                <h1
                    className={css({
                        w: 'full',
                        textAlign: 'center',
                        letterSpacing: '-0.03px',
                        paddingInline: {
                            base: '16px',
                            lg: 0,
                        },
                        maxW: {
                            base: '600px',
                            lg: '800px',
                        },
                        fontSize: {
                            base: '40px',
                            sm: '64px',
                            lg: '80px',
                        },
                        lineHeight: {
                            base: '45px',
                            sm: '60px',
                            lg: '75px',
                        },
                    })}
                >
                    Yesterday you said tomorrow
                </h1>
                <p
                    className={css({
                        textAlign: 'center',
                        mt: '32px',
                        fontSize: {
                            base: '24px',
                            sm: '30px',
                            md: '32px',
                        },
                    })}
                >
                    Let&apos;s start now{' '}
                    <span className={css({ fontStyle: 'italic', color: 'primary' })}>together</span>
                </p>
            </div>
        </CutOutWrapper>
    );
};

import { css } from '../../styled-system/css';

export const sectionStyle = css({
    display: 'flex',
    w: 'full',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBlock: {
        base: '64px',
        md: '128px',
    },
    gap: '32px',
    color: 'title',
});

export const aboutTextStyle = css({
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-0.25px',
    color: {
        base: 'black',
        _dark: 'white',
    },
});

export const aboutSpanStyle = css({ color: 'primary' });

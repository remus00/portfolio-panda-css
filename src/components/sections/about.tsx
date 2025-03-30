import { css, cx } from '../../../styled-system/css';
import { RemusImg } from '../../assets';
import { aboutSpanStyle, aboutTextStyle, sectionStyle } from '../../constants/reusable-styles';
import { SectionTitle } from './section-title';

export const About = () => {
    return (
        <section id="about" className={sectionStyle}>
            <SectionTitle sectionNumber={1} label="Who am I?" />
            <div
                className={css({
                    display: 'flex',
                    justifyContent: 'center',
                    paddingInline: '16px',
                    gap: {
                        base: '32px',
                        sm: '16px',
                        md: '32px',
                    },
                    flexDir: {
                        base: 'column',
                        sm: 'row',
                    },
                    alignItems: {
                        base: 'center',
                        sm: 'start',
                    },
                })}
            >
                <div
                    className={css({
                        pos: 'relative',
                        flexShrink: 0,
                        border: '2px solid',
                        borderRadius: '32px',
                        borderColor: 'card',
                        overflow: 'hidden',
                        w: {
                            base: '192px',
                            md: '256px',
                        },
                        h: {
                            base: '192px',
                            md: '256px',
                        },
                    })}
                >
                    <img
                        src={RemusImg}
                        alt="Remus's photo"
                        className={css({
                            userSelect: 'none',
                            bgPosition: 'center',
                            bgRepeat: 'no-repeat',
                            objectFit: 'fill',
                        })}
                    />
                </div>

                <div
                    className={css({
                        display: 'flex',
                        flexDir: 'column',
                        maxW: '446px',
                        w: 'full',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                    })}
                >
                    <p
                        className={cx(
                            aboutTextStyle,
                            css({ mr: 'auto', w: 'full', maxW: '400px' }),
                        )}
                    >
                        Hi there my name is Marian Remus Burlacu but you can call me{' '}
                        <span className={aboutSpanStyle}>Remus</span>.
                    </p>
                    <p className={aboutTextStyle}>
                        I&apos;m a <span className={aboutSpanStyle}>Frontend developer</span> based
                        in Turin, I specialize in{' '}
                        <span className={aboutSpanStyle}>bringing designs to life</span> &
                        transforming them into{' '}
                        <span className={aboutSpanStyle}>engaging user experiences</span>
                    </p>
                    <p className={aboutTextStyle}>
                        Outside work I&apos;m kinda nerdy and I love working out, certified gym
                        enjoyer.
                    </p>
                </div>
            </div>
        </section>
    );
};

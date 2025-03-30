import { HTMLAttributes } from 'react';
import { css } from '../../../styled-system/css';

interface Props extends HTMLAttributes<HTMLHeadElement> {
    sectionNumber: number;
    label: string;
}

export const SectionTitle = ({ sectionNumber, label, ...rest }: Props) => {
    return (
        <h2
            className={css({
                display: 'flex',
                alignItems: 'start',
                paddingInline: '16px',
                fontSize: {
                    base: '24px',
                    sm: '32px',
                },
                lineHeight: {
                    base: '32px',
                    sm: '40px',
                },
            })}
            {...rest}
        >
            <span
                className={`jura ${css({ flexShrink: 0, fontWeight: 'bold', color: 'primary' })}`}
            >
                0.{sectionNumber} -
            </span>
            <p className={css({ ml: '4px' })}>{label}</p>
        </h2>
    );
};

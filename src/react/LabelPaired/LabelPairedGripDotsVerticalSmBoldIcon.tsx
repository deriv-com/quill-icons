import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 7.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875m0 4.375a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875m.875 3.5c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875M5.25 7.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875m.875 3.5c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875M5.25 16a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875' />
    </g>
    <defs>
      <clipPath id='1de200ab3caa0aa9e8645c6fd5ed2935__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalSmBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 6.813v7.875H2.75V6.812zm-1.313 0q.027-.547.383-.93.382-.356.93-.383H2.75q.547.027.93.383.355.383.382.93v7.875a1.43 1.43 0 0 1-.382.93 1.43 1.43 0 0 1-.93.382H1.438a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93zm6.125 0v7.875h1.313V6.812zm-1.312 0q.027-.547.382-.93.383-.356.93-.383h1.313q.546.027.93.383.355.383.382.93v7.875a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H6.25a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93z' />
    </g>
    <defs>
      <clipPath id='2c8da6d34820dc4af7c96774b148fe34__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineSmBoldIcon = (
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
      <path d='M1.438 9q.027 1.313.902 2.16.847.875 2.16.902 1.367-.027 2.242-.984l.137-.164A2.97 2.97 0 0 0 7.563 9q-.029-1.312-.903-2.16-.848-.875-2.16-.902-1.312.027-2.16.902-.875.848-.902 2.16m3.445 4.348a3 3 0 0 1-.383.027q-1.86-.055-3.09-1.285T.125 9Q.18 7.14 1.41 5.91T4.5 4.625q1.86.054 3.09 1.285T8.875 9q-.027 1.75-1.148 2.953L3.926 16.63q-.438.438-.93.11-.437-.438-.11-.93z' />
    </g>
    <defs>
      <clipPath id='53126791dc62c0feee171bfd5c169832__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineSmBoldIcon);
export default ForwardRef;

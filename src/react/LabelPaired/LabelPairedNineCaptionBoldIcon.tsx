import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 8q.024 1.125.773 1.852.727.75 1.852.773 1.172-.024 1.922-.844l.117-.14q.585-.727.586-1.641-.024-1.125-.773-1.852-.727-.75-1.852-.773-1.125.024-1.852.773-.75.727-.773 1.852m2.953 3.727A2 2 0 0 1 4 11.75q-1.593-.046-2.648-1.102Q.297 9.594.25 8q.046-1.593 1.102-2.648Q2.407 4.297 4 4.25q1.594.046 2.648 1.102Q7.703 6.406 7.75 8q-.024 1.5-.984 2.531L3.508 14.54q-.375.375-.797.094-.375-.375-.094-.797z' />
    </g>
    <defs>
      <clipPath id='305f6d5772f30251__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineCaptionBoldIcon);
export default ForwardRef;

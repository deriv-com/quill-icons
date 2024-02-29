import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineCaptionRegularIcon = (
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
      <path d='M1 8q.024 1.266.867 2.133.868.843 2.133.867 1.266-.024 2.11-.844.82-.844.89-2.086V8q-.024-1.266-.867-2.133Q5.265 5.024 4 5q-1.266.024-2.133.867Q1.024 6.735 1 8m3.773 3.68q-.375.07-.773.07-1.593-.046-2.648-1.102Q.297 9.594.25 8q.046-1.593 1.102-2.648Q2.407 4.297 4 4.25q1.594.046 2.648 1.102Q7.703 6.406 7.75 8v.14a3.97 3.97 0 0 1-.96 2.415l-3.634 4.078q-.258.234-.539.023-.234-.258-.023-.539z' />
    </g>
    <defs>
      <clipPath id='475088a89a5366b86afa0cd6dbffb833__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineCaptionRegularIcon);
export default ForwardRef;

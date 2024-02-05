import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEllipsisMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 18.5q1.781 0 3.25-.875 1.469-.843 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25q-.906-1.53-2.375-2.375Q9.781 5.5 8 5.5t-3.25.875q-1.469.844-2.375 2.375A6.45 6.45 0 0 0 1.5 12q0 1.72.875 3.25.906 1.531 2.375 2.375Q6.22 18.5 8 18.5M8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4m1 8a.97.97 0 0 1-.281.719A.97.97 0 0 1 8 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 12q0-.437.281-.719A.97.97 0 0 1 8 11q.438 0 .719.281A.97.97 0 0 1 9 12m2-1q.438 0 .719.281A.97.97 0 0 1 12 12a.97.97 0 0 1-.281.719A.97.97 0 0 1 11 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 10 12q0-.437.281-.719A.97.97 0 0 1 11 11m-5 1a.97.97 0 0 1-.281.719A.97.97 0 0 1 5 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 4 12q0-.437.281-.719A.97.97 0 0 1 5 11q.438 0 .719.281A.97.97 0 0 1 6 12' />
    </g>
    <defs>
      <clipPath id='e2a1ef82e11006943a6f700ec3518bc3__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEllipsisMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightMdBoldIcon = (
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
      <path d='M14.5 12q0-1.78-.875-3.25-.843-1.469-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875q-1.53.906-2.375 2.375Q1.5 10.22 1.5 12t.875 3.25q.844 1.469 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875q1.531-.906 2.375-2.375.875-1.469.875-3.25M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8.25-4q.969.031 1.594.656.624.625.656 1.594 0 .75-.406 1.313.874.718.906 1.937-.03 1.062-.719 1.781-.719.688-1.781.719h-1q-1.062-.03-1.781-.719Q5.03 14.562 5 13.5q.03-1.218.938-1.937A2.08 2.08 0 0 1 5.5 10.25q.031-.969.656-1.594Q6.781 8.032 7.75 8zm-.5 3h.5q.687-.063.75-.75-.063-.687-.75-.75h-.5q-.687.063-.75.75.063.687.75.75m.5 1.5H7.5a.97.97 0 0 0-.719.281.97.97 0 0 0-.281.719q0 .438.281.719a.97.97 0 0 0 .719.281h1a.97.97 0 0 0 .719-.281.97.97 0 0 0 .281-.719.97.97 0 0 0-.281-.719.97.97 0 0 0-.719-.281z' />
    </g>
    <defs>
      <clipPath id='5a1b45594960f2f7d91b30c5509a4285__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightMdBoldIcon);
export default ForwardRef;

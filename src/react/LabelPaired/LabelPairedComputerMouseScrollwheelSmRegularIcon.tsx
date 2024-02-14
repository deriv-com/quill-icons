import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.875 13.375v-5.25q-.027-1.476-1.012-2.488-1.011-.985-2.488-1.012h-1.75q-1.477.027-2.488 1.012-.985 1.011-1.012 2.488v5.25q.027 1.476 1.012 2.488 1.011.985 2.488 1.012h1.75q1.476-.027 2.488-1.012.985-1.012 1.012-2.488M.25 8.125q.055-1.86 1.285-3.09t3.09-1.285h1.75q1.86.054 3.09 1.285t1.285 3.09v5.25q-.055 1.86-1.285 3.09t-3.09 1.285h-1.75q-1.86-.055-3.09-1.285T.25 13.375zm5.688-1.312v1.75q-.029.41-.438.437-.41-.027-.437-.437v-1.75q.027-.411.437-.438.41.027.438.438' />
    </g>
    <defs>
      <clipPath id='742c43e30eeaae0fdbb00ab68adda14c__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelSmRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkMdBoldIcon = (
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
      <path d='M8 5.5q-1.78 0-3.25.875-1.469.844-2.375 2.375A6.45 6.45 0 0 0 1.5 12q0 1.72.875 3.25.906 1.531 2.375 2.375Q6.22 18.5 8 18.5t3.25-.875q1.469-.843 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25q-.906-1.53-2.375-2.375Q9.781 5.5 8 5.5M8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20M5.469 9.469q.531-.438 1.062 0L8 10.938l1.469-1.47q.531-.435 1.062 0 .438.533 0 1.063L9.062 12l1.47 1.469q.435.531 0 1.062-.533.438-1.063 0L8 13.062l-1.469 1.47q-.531.435-1.062 0-.438-.533 0-1.063L6.937 12 5.47 10.531q-.438-.531 0-1.062' />
    </g>
    <defs>
      <clipPath id='2c5ddb7db372b0853a2b9424a5f38870__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkMdBoldIcon);
export default ForwardRef;

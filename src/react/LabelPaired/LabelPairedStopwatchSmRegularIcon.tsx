import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.875 4.188q.027-.411.438-.438h4.375q.41.027.437.438-.027.41-.437.437h-1.75v1.777q2.078.192 3.5 1.559l1.011-1.012q.3-.273.602 0 .273.3 0 .602L11.01 8.59q1.149 1.476 1.177 3.473-.056 2.406-1.668 4.019-1.614 1.613-4.02 1.668-2.406-.055-4.02-1.668t-1.667-4.02q.054-2.296 1.53-3.882 1.477-1.56 3.72-1.778V4.625h-1.75q-.411-.027-.438-.437m-2.187 7.875q0 1.312.656 2.406a4.74 4.74 0 0 0 1.75 1.75 4.8 4.8 0 0 0 2.406.656q1.258 0 2.406-.656a4.74 4.74 0 0 0 1.75-1.75q.656-1.094.656-2.406 0-1.314-.656-2.407a4.74 4.74 0 0 0-1.75-1.75A4.8 4.8 0 0 0 6.5 7.25q-1.258 0-2.406.656a4.74 4.74 0 0 0-1.75 1.75 4.6 4.6 0 0 0-.656 2.406m5.25-2.626V12.5q-.029.41-.438.438-.41-.028-.437-.438V9.438Q6.09 9.027 6.5 9q.41.027.438.438' />
    </g>
    <defs>
      <clipPath id='13ed6d59c9d52228ab87665f0e9485a2__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchSmRegularIcon);
export default ForwardRef;

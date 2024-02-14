import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixSmRegularIcon = (
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
      <path d='M8 12.5q-.027-1.476-1.012-2.488Q5.977 9.027 4.5 9q-1.477.027-2.434 1.012-.984.957-1.066 2.406v.082q.027 1.476 1.012 2.488Q3.023 15.973 4.5 16q1.476-.027 2.488-1.012Q7.973 13.976 8 12.5M3.598 8.234q.437-.11.902-.109 1.86.054 3.09 1.285t1.285 3.09q-.054 1.86-1.285 3.09T4.5 16.875q-1.86-.055-3.09-1.285T.125 12.5v-.164a4.5 4.5 0 0 1 1.121-2.79l4.238-4.784q.3-.274.63-.028.272.3.027.63z' />
    </g>
    <defs>
      <clipPath id='0c95c0db3615a223452b41ebd2025181__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixSmRegularIcon);
export default ForwardRef;

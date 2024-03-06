import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.5 8q-.03-1.406-1.25-2.156-1.25-.688-2.5 0Q4.531 6.594 4.5 8q.031 1.407 1.25 2.156 1.25.688 2.5 0Q9.47 9.406 9.5 8M3 8q0-1.094.531-2A4.13 4.13 0 0 1 5 4.531 4 4 0 0 1 7 4q1.062 0 2 .531A4.13 4.13 0 0 1 10.469 6Q11 6.906 11 8q0 1.095-.531 2A4.13 4.13 0 0 1 9 11.469 4 4 0 0 1 7 12a4 4 0 0 1-2-.531A4.13 4.13 0 0 1 3.531 10 3.9 3.9 0 0 1 3 8M1.531 18.5H12.47q-.25-1.53-1.344-2.5-1.125-.97-2.687-1H5.562Q4 15.03 2.907 16q-1.125.97-1.375 2.5M0 19.063q.062-2.344 1.625-3.938 1.594-1.562 3.938-1.625h2.875q2.343.063 3.937 1.625 1.563 1.594 1.625 3.938 0 .406-.281.656a.84.84 0 0 1-.656.281H.938a.84.84 0 0 1-.657-.281.84.84 0 0 1-.281-.657' />
    </g>
    <defs>
      <clipPath id='aa26995fbaf53070b97fe6388c52d00e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMdBoldIcon);
export default ForwardRef;

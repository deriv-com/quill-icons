import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.75 19.25v-7.5q-.04-2.109-1.445-3.555Q10.859 6.79 8.75 6.75h-2.5q-2.109.04-3.555 1.445Q1.29 9.641 1.25 11.75v7.5q.04 2.109 1.445 3.555Q4.141 24.21 6.25 24.25h2.5q2.109-.04 3.555-1.445 1.406-1.446 1.445-3.555M0 11.75q.078-2.655 1.836-4.414T6.25 5.5h2.5q2.656.078 4.414 1.836T15 11.75v7.5q-.078 2.656-1.836 4.414T8.75 25.5h-2.5q-2.655-.078-4.414-1.836T0 19.25zm8.125-1.875v2.5q-.039.585-.625.625-.585-.039-.625-.625v-2.5q.039-.585.625-.625.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='aeff64be8583e28140cd363bdef5eac9__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelLgRegularIcon);
export default ForwardRef;

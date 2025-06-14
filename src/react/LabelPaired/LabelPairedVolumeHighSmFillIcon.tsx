import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.824 4.652c1.778 1.45 2.926 3.637 2.926 6.098 0 2.488-1.148 4.676-2.926 6.125a.66.66 0 0 1-.93-.11.65.65 0 0 1 .11-.902 6.558 6.558 0 0 0 0-10.2.68.68 0 0 1-.11-.929.68.68 0 0 1 .93-.082m-1.64 2.024c1.175.984 1.941 2.433 1.941 4.074a5.22 5.22 0 0 1-1.941 4.074.65.65 0 0 1-.93-.082c-.246-.273-.191-.683.082-.93a3.86 3.86 0 0 0 1.476-3.062 3.85 3.85 0 0 0-1.476-3.035.68.68 0 0 1-.082-.93.68.68 0 0 1 .93-.11m-1.668 2.05c.601.493.984 1.204.984 2.024 0 .848-.383 1.559-.984 2.05a.66.66 0 0 1-.93-.109.65.65 0 0 1 .11-.902c.3-.246.492-.629.492-1.039s-.192-.766-.493-1.012a.68.68 0 0 1-.11-.93.68.68 0 0 1 .93-.081M8.48 4.708c.301.137.52.465.52.793V16c0 .355-.219.656-.52.82a.89.89 0 0 1-.957-.164l-3.691-3.281H2c-.984 0-1.75-.766-1.75-1.75v-1.75c0-.957.766-1.75 1.75-1.75h1.832l3.691-3.254a.89.89 0 0 1 .957-.164' />
    </g>
    <defs>
      <clipPath id='656ceb38b8e9286e881a0db6546bbbf8__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighSmFillIcon);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.355 4.707c.301.137.52.465.52.793V16c0 .355-.219.656-.52.82a.89.89 0 0 1-.957-.164l-3.691-3.281H1.875c-.984 0-1.75-.766-1.75-1.75v-1.75c0-.957.766-1.75 1.75-1.75h1.832l3.691-3.254a.89.89 0 0 1 .957-.164m3.391 3.61L13.25 9.82l1.504-1.504a.644.644 0 0 1 .902 0c.274.274.274.684 0 .93l-1.504 1.504 1.504 1.504c.274.273.274.684 0 .93a.6.6 0 0 1-.902 0L13.25 11.68l-1.504 1.504c-.273.273-.684.273-.93 0-.273-.246-.273-.657 0-.93l1.504-1.504-1.504-1.504c-.273-.246-.273-.656 0-.93.246-.246.657-.246.93 0' />
    </g>
    <defs>
      <clipPath id='07216f4d87943c6e78454d014f7de165__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkSmFillIcon);
export default ForwardRef;

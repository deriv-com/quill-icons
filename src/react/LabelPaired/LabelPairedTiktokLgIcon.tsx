import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.75 13.703q-2.655 0-4.805-1.523v6.953q0 2.031-1.133 3.633-1.093 1.601-2.968 2.343-1.915.664-3.79.196-1.875-.47-3.242-1.992A6.47 6.47 0 0 1 .29 19.836q-.195-1.914.742-3.711.977-1.758 2.696-2.656 1.757-.86 3.75-.625v3.515q-.937-.273-1.797.04-.86.273-1.446 1.054a2.93 2.93 0 0 0-.546 1.719q0 .898.546 1.719.586.741 1.485 1.015.86.313 1.797 0a2.96 2.96 0 0 0 1.445-1.054 2.82 2.82 0 0 0 .547-1.72V5.5h3.437q0 .43.078.86.43 1.992 2.11 3.124 1.211.782 2.617.82z' />
    </g>
    <defs>
      <clipPath id='e14a2cb9010ce4ceadd233402d36c818__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokLgIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.5 10.5c0 1.719-.86 3.203-2.148 4.102l-1.016-.82A3.76 3.76 0 0 0 16.25 10.5c0-2.07-1.68-3.75-3.75-3.75-1.719 0-3.164 1.172-3.633 2.734l-1.015-.82C8.555 6.828 10.39 5.5 12.5 5.5c2.734 0 5 2.266 5 5m2.031 13.75 1.25 1.016a1.1 1.1 0 0 1-.703.234H4.883a1.134 1.134 0 0 1-1.133-1.133c0-3.867 3.086-6.992 6.953-6.992h.117l1.602 1.25h-1.719c-3.125 0-5.664 2.54-5.703 5.625zM.977 5.656l23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L.234 6.633c-.273-.195-.351-.625-.117-.86.195-.273.625-.351.86-.117' />
    </g>
    <defs>
      <clipPath id='ba533c948c4888e350892eae5c62039c__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashLgRegularIcon);
export default ForwardRef;

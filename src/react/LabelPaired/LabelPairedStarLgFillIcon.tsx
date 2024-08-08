import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.594 6.203 2.539 5.195 5.586.82c.468.079.86.391 1.015.86.157.43.04.938-.312 1.25l-4.063 4.024.977 5.703c.078.468-.117.937-.508 1.21-.39.313-.898.313-1.328.118l-5-2.695-5.04 2.695c-.39.195-.897.195-1.288-.117a1.23 1.23 0 0 1-.508-1.211l.938-5.703-4.063-4.024c-.312-.312-.43-.82-.312-1.25a1.27 1.27 0 0 1 1.015-.86l5.625-.82 2.5-5.195c.195-.43.625-.703 1.133-.703.469 0 .898.273 1.094.703' />
    </g>
    <defs>
      <clipPath id='21fdc2c64c5fd48b60a79bfb1421591d__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarLgFillIcon);
export default ForwardRef;

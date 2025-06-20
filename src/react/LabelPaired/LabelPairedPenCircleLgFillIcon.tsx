import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m3.945-14.531c-.586-.586-1.601-.586-2.187 0l-.86.86 2.774 2.773.86-.86c.585-.625.585-1.601 0-2.187zm-8.047 5.82c-.156.156-.273.39-.312.586L5 19.719c-.04.234 0 .468.156.625.157.156.39.195.586.156l2.383-.586a1.6 1.6 0 0 0 .547-.352l4.14-4.101-2.773-2.774z' />
    </g>
    <defs>
      <clipPath id='d83d25038492a201de19633b9e20a3a5__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleLgFillIcon);
export default ForwardRef;

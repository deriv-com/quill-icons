import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternSmBoldIcon = (
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
      <path d='M2.219 5.5c0-.82.683-1.531 1.531-1.531.602 0 1.121.383 1.367.875h2.488A1.57 1.57 0 0 1 9 3.969c.602 0 1.121.383 1.367.875h2.488a1.57 1.57 0 0 1 1.395-.875c.82 0 1.531.71 1.531 1.531a1.546 1.546 0 0 1-2.05 1.45l-3.31 3.308c.056.164.11.328.11.492a1.546 1.546 0 0 1-2.05 1.45l-3.172 3.144h2.296A1.57 1.57 0 0 1 9 14.469c.602 0 1.121.383 1.367.875h2.488a1.57 1.57 0 0 1 1.395-.875c.82 0 1.531.71 1.531 1.531 0 .848-.71 1.531-1.531 1.531a1.52 1.52 0 0 1-1.395-.875h-2.488c-.246.52-.765.875-1.367.875a1.52 1.52 0 0 1-1.395-.875H5.117c-.246.52-.765.875-1.367.875A1.53 1.53 0 0 1 2.219 16c0-.82.683-1.531 1.531-1.531.164 0 .328.054.492.11l3.309-3.31A1.546 1.546 0 0 1 9 9.22c.163 0 .327.054.491.11l3.172-3.173h-2.297c-.246.52-.765.875-1.367.875a1.52 1.52 0 0 1-1.395-.875H5.117c-.246.52-.765.875-1.367.875A1.53 1.53 0 0 1 2.219 5.5m0 5.25c0 .574.273 1.066.765 1.34a1.531 1.531 0 1 0 0-2.652 1.47 1.47 0 0 0-.765 1.312m10.5 0c0 .574.273 1.066.765 1.34a1.531 1.531 0 1 0 0-2.652 1.47 1.47 0 0 0-.765 1.312' />
    </g>
    <defs>
      <clipPath id='6883bf932bb4f93eafe6ab75c10b4b72__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternSmBoldIcon);
export default ForwardRef;

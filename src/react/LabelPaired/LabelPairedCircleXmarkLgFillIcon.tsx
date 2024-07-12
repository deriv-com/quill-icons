import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M6.836 12.336c-.39.39-.39.976 0 1.328L8.672 15.5l-1.836 1.836c-.39.39-.39.977 0 1.328.351.39.937.39 1.289 0l1.836-1.836 1.836 1.836c.39.39.976.39 1.328 0 .39-.352.39-.937 0-1.328L11.289 15.5l1.836-1.836c.39-.351.39-.937 0-1.328-.352-.352-.937-.352-1.328 0L9.96 14.172l-1.836-1.836a.92.92 0 0 0-1.29 0' />
    </g>
    <defs>
      <clipPath id='0164fcc56fe6119d5c3b1dfe54fa1db9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkLgFillIcon);
export default ForwardRef;

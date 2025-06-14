import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightLgBoldIcon = (
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
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.313-5c1.523 0 2.812 1.29 2.812 2.813 0 .624-.195 1.21-.547 1.64.703.586 1.172 1.445 1.172 2.422a3.11 3.11 0 0 1-3.125 3.125h-1.25c-1.758 0-3.125-1.367-3.125-3.125 0-.977.43-1.836 1.133-2.422-.313-.43-.508-1.015-.508-1.64A2.826 2.826 0 0 1 9.688 10.5zm-.626 3.75h.626c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938h-.626a.925.925 0 0 0-.937.938c0 .546.39.937.938.937m.626 1.875h-.938c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25h1.25c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25z' />
    </g>
    <defs>
      <clipPath id='acaec84ae5f0818e2f57308fe85a1299__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightLgBoldIcon);
export default ForwardRef;

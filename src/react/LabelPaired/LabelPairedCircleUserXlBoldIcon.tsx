import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.031 24.75A9.65 9.65 0 0 0 21.75 18c0-5.344-4.406-9.75-9.75-9.75-5.39 0-9.75 4.406-9.75 9.75 0 2.625.984 5.016 2.672 6.75A6 6 0 0 1 10.5 21h3c2.484 0 4.64 1.547 5.531 3.75m-1.875 1.547c-.328-1.735-1.875-3.047-3.656-3.047h-3c-1.828 0-3.375 1.313-3.703 3.047 1.5.937 3.281 1.453 5.203 1.453a9.7 9.7 0 0 0 5.156-1.453M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m0-12.75c.656 0 1.266-.328 1.594-.937.328-.563.328-1.266 0-1.875-.328-.563-.938-.938-1.594-.938a1.89 1.89 0 0 0-1.64.938c-.329.609-.329 1.312 0 1.874.328.61.937.938 1.64.938m-4.125-1.875c0-1.453.75-2.812 2.063-3.562 1.265-.704 2.812-.704 4.124 0 1.266.75 2.063 2.109 2.063 3.562 0 1.5-.797 2.86-2.062 3.61-1.313.703-2.86.703-4.126 0-1.312-.75-2.062-2.11-2.062-3.61' />
    </g>
    <defs>
      <clipPath id='c5e46e31721f9501b127d8c98c1aca7c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserXlBoldIcon);
export default ForwardRef;

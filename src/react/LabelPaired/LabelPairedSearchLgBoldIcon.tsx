import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchLgBoldIcon = (
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
      <path d='M14.375 13.625c0-2.227-1.21-4.258-3.125-5.39-1.953-1.133-4.336-1.133-6.25 0-1.953 1.132-3.125 3.163-3.125 5.39A6.22 6.22 0 0 0 5 19.055c1.914 1.133 4.297 1.133 6.25 0 1.914-1.133 3.125-3.164 3.125-5.43m-1.21 6.406a8.2 8.2 0 0 1-5.04 1.719A8.12 8.12 0 0 1 0 13.625C0 9.172 3.633 5.5 8.125 5.5c4.453 0 8.125 3.672 8.125 8.125a8.25 8.25 0 0 1-1.758 5.078l5.235 5.195c.351.391.351.977 0 1.329-.391.39-.977.39-1.329 0z' />
    </g>
    <defs>
      <clipPath id='7c76bb55a375d413cf3effe7cee1f9b0__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchLgBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M8.672 12.727c.312-.196.625-.313 1.015-.313h.118c.78 0 1.445.664 1.445 1.445 0 .391-.195.782-.469 1.055l-4.258 3.984a.98.98 0 0 0-.234 1.016.99.99 0 0 0 .899.586h5.625c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938H9.53l2.54-2.344c.663-.625 1.015-1.484 1.015-2.422a3.327 3.327 0 0 0-3.242-3.32h-.156a3.54 3.54 0 0 0-2.149.703l-.937.703c-.43.313-.508.938-.196 1.328.313.43.938.508 1.328.196z' />
    </g>
    <defs>
      <clipPath id='23b297b27d73e78f1394b5c173611aff__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoLgFillIcon);
export default ForwardRef;

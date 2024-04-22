import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookLgIcon = (
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
      <path d='M20 15.5c0 5.117-3.867 9.336-8.79 9.96v-6.874h2.696l.547-3.086h-3.242v-1.055c0-1.64.625-2.265 2.266-2.265.507 0 .898.039 1.132.039V9.484c-.43-.156-1.523-.273-2.148-.273-3.36 0-4.883 1.601-4.883 5V15.5h-2.07v3.086h2.07v6.64A10.015 10.015 0 0 1 0 15.5c0-5.508 4.453-10 10-10 5.508 0 10 4.492 10 10' />
    </g>
    <defs>
      <clipPath id='8ee5af89c444ed82da6cef697705c14c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookLgIcon);
export default ForwardRef;

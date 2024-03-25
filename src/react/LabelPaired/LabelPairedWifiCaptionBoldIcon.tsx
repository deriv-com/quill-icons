import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.914 7.86a.53.53 0 0 1-.773-.048.56.56 0 0 1 .047-.796A11.04 11.04 0 0 1 7.5 4.25c2.79 0 5.344 1.055 7.29 2.766.233.21.257.562.07.797a.56.56 0 0 1-.797.046A9.9 9.9 0 0 0 7.5 5.375 9.92 9.92 0 0 0 .914 7.859M7.5 9.5a5.75 5.75 0 0 0-3.937 1.547.56.56 0 0 1-.797-.047.58.58 0 0 1 .023-.797A6.99 6.99 0 0 1 7.5 8.375a6.97 6.97 0 0 1 4.688 1.828.58.58 0 0 1 .023.797.56.56 0 0 1-.797.047A5.74 5.74 0 0 0 7.5 9.5m1.313 3.938a1.313 1.313 0 0 1-1.969 1.148c-.422-.234-.657-.656-.657-1.149 0-.468.235-.89.657-1.124a1.313 1.313 0 0 1 1.968 1.124' />
    </g>
    <defs>
      <clipPath id='dda329a67387648d634e45fe6f4ae38c__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiCaptionBoldIcon);
export default ForwardRef;

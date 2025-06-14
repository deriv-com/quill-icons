import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiCaptionRegularIcon = (
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
      <path d='M.633 7.836c-.164.14-.399.14-.54 0-.14-.164-.14-.399 0-.54A10.53 10.53 0 0 1 7.5 4.25c2.86 0 5.484 1.172 7.383 3.047.14.14.14.375 0 .539-.14.14-.375.14-.54 0A9.64 9.64 0 0 0 7.5 5 9.65 9.65 0 0 0 .633 7.836M7.5 8.75c-1.664 0-3.164.68-4.242 1.758-.14.14-.375.14-.54 0a.37.37 0 0 1 0-.516A6.73 6.73 0 0 1 7.5 8.023c1.852 0 3.54.75 4.758 1.97.14.14.14.374 0 .515-.14.14-.375.14-.54 0A5.97 5.97 0 0 0 7.5 8.75m0 3.75a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75m0 2.25c-.54 0-1.031-.281-1.312-.75a1.55 1.55 0 0 1 0-1.5c.28-.445.773-.75 1.312-.75.516 0 1.008.305 1.29.75a1.55 1.55 0 0 1 0 1.5c-.282.469-.774.75-1.29.75' />
    </g>
    <defs>
      <clipPath id='7b28d867a39f25ebabd1e214a5511dd6__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiCaptionRegularIcon);
export default ForwardRef;

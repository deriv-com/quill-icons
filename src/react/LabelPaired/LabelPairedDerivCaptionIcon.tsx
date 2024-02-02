import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivCaptionIcon = (
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
      <path d='M9.938 3.898 12.28 3.5l-1.64 9.375C10.383 14.328 9 15.5 7.523 15.5h-1.78c-2.016 0-3.352-1.617-3-3.61l.163-.867c.352-1.992 2.25-3.632 4.266-3.632h2.133zm-1.524 8.649.516-3H7.055c-.914 0-1.758.75-1.922 1.64l-.094.54c-.164.89.445 1.617 1.336 1.617h1.102c.445 0 .843-.352.937-.797' />
    </g>
    <defs>
      <clipPath id='4f322bc93df9be1c__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivCaptionIcon);
export default ForwardRef;

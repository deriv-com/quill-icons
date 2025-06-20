import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 6.75h1.25v2.5H4c-.703 0-1.25.586-1.25 1.25v1.25H.25V10.5C.25 8.43 1.93 6.75 4 6.75M.25 13h2.5v5H.25zm15 0h2.5v5h-2.5zm2.5-1.25h-2.5V10.5c0-.664-.586-1.25-1.25-1.25h-1.25v-2.5H14c2.07 0 3.75 1.68 3.75 3.75zm0 7.5v1.25c0 2.07-1.68 3.75-3.75 3.75h-1.25v-2.5H14c.664 0 1.25-.547 1.25-1.25v-1.25zm-15 0v1.25c0 .703.547 1.25 1.25 1.25h1.25v2.5H4c-2.07 0-3.75-1.68-3.75-3.75v-1.25zm3.75 5v-2.5h5v2.5zm0-15v-2.5h5v2.5z' />
    </g>
    <defs>
      <clipPath id='26b147c499204cb15143a82608c91db8__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderLgFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.25A2.25 2.25 0 0 1 2.25 6h13.5C16.969 6 18 7.031 18 8.25v20.719c0 .61-.469 1.031-1.078 1.031q-.282 0-.563-.14L9 24.937l-7.406 4.921Q1.312 30 1.03 30C.421 30 0 29.578 0 28.969zm2.25-.75c-.422 0-.75.375-.75.75v19.875l7.078-4.734a.8.8 0 0 1 .797 0l7.125 4.734V8.25c0-.375-.375-.75-.75-.75z' />
    </g>
    <defs>
      <clipPath id='ee99277cb79bf8a6467299f521e8d0f9__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkXlRegularIcon);
export default ForwardRef;

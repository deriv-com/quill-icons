import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLinesXlFillIcon = (
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
      <path d='M3 6h7.5v6c0 .844.656 1.5 1.5 1.5h6V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m9 0 6 6h-6zM5.25 18c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm0 3c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm0 3c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75z' />
    </g>
    <defs>
      <clipPath id='d8876f442b0d93d2f51e7b3700b4c0d7__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLinesXlFillIcon);
export default ForwardRef;

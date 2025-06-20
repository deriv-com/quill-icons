import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCircleMinusMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7.75C0 6.25 1.219 5 2.75 5h11.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H2.75c-.719 0-1.25.563-1.25 1.25v8.5c0 .719.531 1.25 1.25 1.25h7.625c.188.563.5 1.063.875 1.5h-8.5A2.734 2.734 0 0 1 0 16.25zm3 1A.74.74 0 0 1 3.75 8h9.5c1.25 0 2.313.875 2.625 2.031-.125 0-.25-.031-.375-.031-.406 0-.812.063-1.187.125-.22-.344-.626-.625-1.063-.625h-9.5A.72.72 0 0 1 3 8.75m8 6.75c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m2 0c0 .281.219.5.5.5h4c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-4c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='6e024a7b844cdb0a9227e01baeeca2b5__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m-4-7.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h.75a3.98 3.98 0 0 0 3.719 2.563H9.78a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75H8.47c-.844 0-1.563-.407-2.031-1.063H9c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H6c-.031-.125-.031-.312-.031-.469 0-.187 0-.344.031-.531h3c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H6.469c.468-.594 1.187-1 2-1H9.78a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H8.47C6.813 8 5.344 9.063 4.75 10.5H4c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h.5c-.031.188-.031.375-.031.531s0 .313.031.469z' />
    </g>
    <defs>
      <clipPath id='76d16882392cc47ac5c8139724e3912d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroMdFillIcon);
export default ForwardRef;

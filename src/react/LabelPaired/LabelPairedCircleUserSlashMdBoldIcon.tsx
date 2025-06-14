import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashMdBoldIcon = (
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
      <path d='M.156 4.313c.25-.344.719-.407 1.032-.125l3 2.312C5.688 4.938 7.75 4 10 4c2.844 0 5.5 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8-.062.125-.125.219-.187.344l2.968 2.343c.344.25.407.72.125 1.032-.25.343-.718.406-1.03.125l-18.5-14.5c-.344-.25-.407-.719-.126-1.032M2.563 9.03l1.25 1A5.9 5.9 0 0 0 3.5 12c0 1.75.656 3.344 1.781 4.5a3.96 3.96 0 0 1 3.594-2.469l1.906 1.469H9c-1.219 0-2.25.875-2.469 2.031 1 .625 2.188.969 3.469.969a6.6 6.6 0 0 0 3.375-.937l1.25.968A8.06 8.06 0 0 1 10 20c-2.875 0-5.5-1.5-6.937-4-1.25-2.125-1.407-4.687-.5-6.969m2.812-1.594L7.5 9.095c.219-.5.625-.906 1.125-1.219a2.86 2.86 0 0 1 2.75 0 2.78 2.78 0 0 1 1.375 2.375c0 .844-.406 1.656-1.031 2.156l3.812 3c.594-1 .969-2.156.969-3.406 0-3.562-2.937-6.5-6.5-6.5-1.812 0-3.469.75-4.625 1.938m3.375 2.657 1.688 1.344c.28-.126.5-.313.624-.532a1.27 1.27 0 0 0 0-1.25A1.19 1.19 0 0 0 10 9.031c-.469 0-.875.219-1.094.625-.094.125-.125.281-.156.438' />
    </g>
    <defs>
      <clipPath id='bba36424962bb93d38cd7c1df40f6409__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashMdBoldIcon);
export default ForwardRef;

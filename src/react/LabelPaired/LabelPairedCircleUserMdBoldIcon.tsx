import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserMdBoldIcon = (
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
      <path d='M12.688 16.5A6.44 6.44 0 0 0 14.5 12c0-3.562-2.937-6.5-6.5-6.5-3.594 0-6.5 2.938-6.5 6.5 0 1.75.656 3.344 1.781 4.5A4 4 0 0 1 7 14h2a3.99 3.99 0 0 1 3.688 2.5m-1.25 1.031C11.218 16.375 10.188 15.5 9 15.5H7c-1.219 0-2.25.875-2.469 2.031 1 .625 2.188.969 3.469.969 1.25 0 2.438-.344 3.438-.969M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m0-8.5c.438 0 .844-.219 1.063-.625a1.27 1.27 0 0 0 0-1.25A1.25 1.25 0 0 0 8 9c-.469 0-.875.25-1.094.625a1.27 1.27 0 0 0 0 1.25c.219.406.625.625 1.094.625m-2.75-1.25c0-.969.5-1.875 1.375-2.375a2.86 2.86 0 0 1 2.75 0 2.78 2.78 0 0 1 1.375 2.375c0 1-.531 1.906-1.375 2.406a2.86 2.86 0 0 1-2.75 0c-.875-.5-1.375-1.406-1.375-2.406' />
    </g>
    <defs>
      <clipPath id='e02da2fcb991f523970a20538b046f3c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserMdBoldIcon);
export default ForwardRef;

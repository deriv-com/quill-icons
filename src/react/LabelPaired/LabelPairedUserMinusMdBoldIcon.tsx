import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMinusMdBoldIcon = (
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
      <path d='M7 5.5c-.906 0-1.719.5-2.187 1.25-.438.781-.438 1.75 0 2.5A2.53 2.53 0 0 0 7 10.5c.875 0 1.688-.469 2.156-1.25.438-.75.438-1.719 0-2.5C8.687 6 7.875 5.5 7 5.5M7 12c-1.437 0-2.75-.75-3.469-2-.719-1.219-.719-2.75 0-4A4.04 4.04 0 0 1 7 4c1.406 0 2.719.781 3.438 2 .718 1.25.718 2.781 0 4A3.96 3.96 0 0 1 7 12m-1.437 3a4.08 4.08 0 0 0-4.032 3.5h10.907A4.08 4.08 0 0 0 8.406 15zm0-1.5h2.843C11.5 13.5 14 16 14 19.094c0 .5-.437.906-.937.906H.906A.907.907 0 0 1 0 19.094C0 16 2.469 13.5 5.563 13.5m9.187-3.25h4.5A.76.76 0 0 1 20 11a.74.74 0 0 1-.75.75h-4.5A.72.72 0 0 1 14 11a.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='8a11a2819f2fa05fa0b06b567f78d737__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMinusMdBoldIcon);
export default ForwardRef;

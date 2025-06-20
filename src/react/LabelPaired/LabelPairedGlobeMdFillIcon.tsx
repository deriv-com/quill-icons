import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeMdFillIcon = (
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
      <path d='M11 12c0 .719-.062 1.375-.125 2H5.094A20 20 0 0 1 5 12c0-.687.031-1.344.094-2h5.781c.063.656.125 1.313.125 2m.875-2h3.844c.187.656.281 1.313.281 2 0 .719-.094 1.375-.281 2h-3.844c.063-.625.125-1.312.125-2s-.062-1.344-.125-2m3.531-1H11.75c-.312-1.969-.937-3.656-1.719-4.719C12.47 4.938 14.47 6.688 15.406 9M10.75 9H5.219c.187-1.125.5-2.125.843-2.937.344-.75.688-1.282 1.063-1.625C7.469 4.125 7.75 4 8 4c.219 0 .5.125.844.438.375.343.719.875 1.062 1.625.344.812.656 1.812.844 2.937M4.219 9H.562C1.5 6.688 3.5 4.938 5.939 4.281 5.156 5.344 4.53 7.031 4.218 9M.25 10h3.844A21 21 0 0 0 4 12c0 .688.031 1.375.094 2H.25C.063 13.375 0 12.719 0 12c0-.687.063-1.344.25-2m5.813 7.969A13 13 0 0 1 5.219 15h5.531a13 13 0 0 1-.844 2.969c-.344.75-.687 1.281-1.062 1.625C8.5 19.906 8.219 20 8 20c-.25 0-.531-.094-.875-.406-.375-.344-.719-.875-1.062-1.625M4.219 15c.312 2 .937 3.688 1.718 4.75A8.02 8.02 0 0 1 .564 15zm11.187 0a8.02 8.02 0 0 1-5.375 4.75c.813-1.062 1.406-2.75 1.719-4.75z' />
    </g>
    <defs>
      <clipPath id='db9d8cec6c5015f92669bff6a8ebe647__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeMdFillIcon);
export default ForwardRef;

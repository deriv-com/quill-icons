import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m4.031-8.781L8.5 7.719a.736.736 0 0 0-1.031 0l-3.5 3.5c-.313.312-.313.781 0 1.062.281.313.75.313 1.062 0l2.219-2.219v5.688c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-5.687l2.219 2.218c.281.313.75.313 1.062 0 .281-.281.281-.75 0-1.062' />
    </g>
    <defs>
      <clipPath id='1ecb03f67dbd0e4467ce62d55eaa7fe0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpMdFillIcon);
export default ForwardRef;

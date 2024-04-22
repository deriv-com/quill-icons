import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLeftMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m2-11.5H5.25a.74.74 0 0 0-.75.75v5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-3.187l4.219 4.218c.281.313.75.313 1.062 0 .281-.281.281-.75 0-1.062L7.031 10H10a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75' />
    </g>
    <defs>
      <clipPath id='1b3b16b9fff6b80a44856197d9acbfd4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLeftMdFillIcon);
export default ForwardRef;

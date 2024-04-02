import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownRightMdFillIcon = (
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
      <path d='M8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4M6 15.5h4.719c.437 0 .75-.312.75-.75v-5a.74.74 0 0 0-.75-.75.76.76 0 0 0-.75.75v3.219L5.75 8.75a.684.684 0 0 0-1.031 0 .684.684 0 0 0 0 1.031L8.938 14H6a.74.74 0 0 0-.75.75c0 .438.313.75.75.75' />
    </g>
    <defs>
      <clipPath id='a65dfa4f4a562336f91ef33d101ba5db__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightMdFillIcon);
export default ForwardRef;

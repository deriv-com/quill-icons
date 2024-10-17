import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCirclePlusMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m-.75-5.25c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-2h2a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75h-2v-2A.76.76 0 0 0 8 8.5a.74.74 0 0 0-.75.75v2h-2a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h2z' />
    </g>
    <defs>
      <clipPath id='174a0f08da88227560f55c1def41ac2b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCirclePlusMdFillIcon);
export default ForwardRef;

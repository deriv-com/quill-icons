import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaMdBoldIcon = (
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
      <path d='M1.5 5.75v11c0 .438.313.75.75.75h13a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-13C1 19 0 18 0 16.75v-11A.74.74 0 0 1 .75 5a.76.76 0 0 1 .75.75m7.438 5.313L7 9.125l-2.5 2.5V14.5h9v-2.437l-1.594-1.844-.875.844a1.47 1.47 0 0 1-2.094 0M10 10l1.031-1.031.188-.188a1.01 1.01 0 0 1 1.469.063l1.937 2.25c.219.281.375.625.375.969V15c0 .563-.469 1-1 1H4c-.562 0-1-.437-1-1v-3.375c0-.375.156-.781.438-1.062L6.28 7.719a1.02 1.02 0 0 1 1.407 0l1.25 1.25z' />
    </g>
    <defs>
      <clipPath id='b008abd7db67b97af02e5cd5005b8f07__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaMdBoldIcon);
export default ForwardRef;

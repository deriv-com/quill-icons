import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 6.719 2.219 9.5H7.78zM4.281 5.28Q4.594 5.001 5 5q.405 0 .719.281l4 4q.437.5.219 1.094-.281.594-.938.625H1q-.656-.031-.937-.625-.219-.594.218-1.094z' />
    </g>
    <defs>
      <clipPath id='c84d45582a7c03dcfb3385259e23ca14__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpMdBoldIcon);
export default ForwardRef;

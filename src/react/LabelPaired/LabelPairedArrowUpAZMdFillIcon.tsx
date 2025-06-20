import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.719 5.344 2.75 3a.99.99 0 0 1-.063 1.406A.99.99 0 0 1 7 9.688L6 8.594V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1V8.594L2.969 9.688a.99.99 0 0 1-1.406.062.99.99 0 0 1-.063-1.406l2.75-3A1 1 0 0 1 5 5c.281 0 .531.125.719.344M10 14c0-.531.438-1 1-1h4c.406 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094l-2.28 2.312H15c.531 0 1 .438 1 1 0 .532-.469 1-1 1h-4c-.406 0-.781-.25-.937-.625a1.01 1.01 0 0 1 .218-1.093L12.562 15H11c-.562 0-1-.437-1-1m3-9c.375 0 .719.219.875.563l2 4 .5 1a.99.99 0 0 1-.437 1.343.99.99 0 0 1-1.344-.437L14.375 11h-2.781l-.219.469a.99.99 0 0 1-1.344.437.99.99 0 0 1-.437-1.344l.5-1 2-4A.97.97 0 0 1 13 5m-.656 4.5h1.281L13 8.25z' />
    </g>
    <defs>
      <clipPath id='c1796b0cfcf7001181a0f289f56229cf__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZMdFillIcon);
export default ForwardRef;

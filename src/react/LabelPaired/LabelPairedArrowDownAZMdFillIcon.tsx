import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZMdFillIcon = (
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
      <path d='M5.719 18.688A.9.9 0 0 1 5 19c-.281 0-.562-.094-.75-.312l-2.75-3a.99.99 0 0 1 .063-1.407.99.99 0 0 1 1.406.063L4 15.438V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v9.438l1-1.094a.99.99 0 0 1 1.406-.063c.406.375.438 1 .063 1.406zM10 14c0-.531.438-1 1-1h4c.375 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094L13.408 17H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-4c-.406 0-.781-.219-.937-.594a1.01 1.01 0 0 1 .218-1.093L12.562 15H11c-.562 0-1-.437-1-1m3-9c.375 0 .719.219.875.563l2 4 .5 1a.99.99 0 0 1-.437 1.343.99.99 0 0 1-1.344-.437L14.375 11h-2.781l-.219.469a.99.99 0 0 1-1.344.437.99.99 0 0 1-.437-1.344l.5-1 2-4A.97.97 0 0 1 13 5m-.656 4.5h1.281L13 8.25z' />
    </g>
    <defs>
      <clipPath id='b470b2ce24e3a1d720f499e9554158cb__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZMdFillIcon);
export default ForwardRef;

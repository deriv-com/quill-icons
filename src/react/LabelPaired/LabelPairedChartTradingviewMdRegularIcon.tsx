import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={19}
    height={24}
    viewBox='0 0 19 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.89 18.531V5.406a.48.48 0 0 1 .47-.468.46.46 0 0 1 .468.468v12.782c0 .5.406.875.906.875H15.61a.48.48 0 0 1 .47.468.46.46 0 0 1-.47.469H4.36a1.45 1.45 0 0 1-1.468-1.469m13.063-7.812a.56.56 0 0 0-.687 0l-4.844 4.875-1.219-1.219c-.375-.375-.969-.375-1.312 0l-2.032 2a.49.49 0 0 0 0 .688.453.453 0 0 0 .657 0l2.03-2.032 1.22 1.219c.375.375.968.375 1.312 0l4.875-4.844a.49.49 0 0 0 0-.687M10.766 7.5c0-.344-.313-.656-.688-.656s-.687.312-.687.656c0 .375.312.656.687.656s.688-.281.688-.656m.53-.656-1.405 3.75h1.03l1.376-3.75zm-4.624 0v.843H8.14v2.907h.906v-3.75z' />
    </g>
    <defs>
      <clipPath id='11f0467150596c462af647c6fc7f07a3__a'>
        <path d='M0 0h19v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewMdRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 6c.61 0 1.125.516 1.125 1.125v19.922c0 .422.281.703.703.703h17.25a1.11 1.11 0 0 1 1.125 1.125c0 .656-.469 1.125-1.125 1.125H6.234a2.1 2.1 0 0 1-2.109-2.11V7.126C4.125 6.515 4.594 6 5.25 6m19.875 9.375c.469.422.469 1.125 0 1.594l-7.312 7.312c-.75.75-1.922.75-2.672 0L13.5 22.594l-2.953 2.953c-.469.469-1.172.469-1.594 0-.469-.422-.469-1.125 0-1.594l3.188-3.187c.75-.75 1.922-.75 2.672 0l1.687 1.687 7.031-7.078c.469-.469 1.172-.469 1.594 0m-8.11-5.297c0 .563-.515 1.031-1.078 1.031-.609 0-1.124-.468-1.124-1.03s.515-1.032 1.124-1.032c.563 0 1.079.469 1.079 1.031M17.86 9H19.5l-2.203 6h-1.64zM10.5 9h3.797v6h-1.453v-4.64H10.5z' />
    </g>
    <defs>
      <clipPath id='e9ffbca7a38fe524a707783495a32536__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewXlBoldIcon);
export default ForwardRef;

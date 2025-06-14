import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewXlFillIcon = (
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
      <path d='M25.031 15.469c.61.562.61 1.547 0 2.11l-6.984 6.983c-.844.844-2.297.844-3.14 0L13.5 23.157l-1.969 1.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l2.485-2.484a2.18 2.18 0 0 1 3.14 0l1.454 1.407 6.422-6.422a1.445 1.445 0 0 1 2.11 0m-7.64-5.39c0 .562-.516 1.03-1.078 1.03-.61 0-1.125-.468-1.125-1.03s.515-1.032 1.124-1.032c.563 0 1.079.469 1.079 1.031M18.234 9h1.641l-2.203 6h-1.64zm-7.359 0h3.797v6h-1.453v-4.64h-2.344zM6 6c.797 0 1.5.703 1.5 1.5v19.078c0 .235.188.422.469.422H24.75c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H6.844c-1.36 0-2.344-.984-2.344-2.344V7.5C4.5 6.703 5.156 6 6 6' />
    </g>
    <defs>
      <clipPath id='e111c0701eff61626f0f5c8574cd09ab__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewXlFillIcon);
export default ForwardRef;

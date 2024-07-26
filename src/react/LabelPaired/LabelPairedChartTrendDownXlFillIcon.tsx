import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownXlFillIcon = (
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
      <path d='M9.797 6.188c.75-.375 1.64-.094 2.015.656L17.392 18H24c.563 0 1.078.328 1.313.844l4.5 9c.375.75.093 1.64-.657 2.015s-1.64.094-2.015-.656L23.063 21H16.5c-.61 0-1.125-.281-1.36-.797L9.798 9.516l-7.64 3.843c-.75.375-1.641.094-2.016-.656s-.094-1.64.656-2.015z' />
    </g>
    <defs>
      <clipPath id='74beaf094ebdc646346e5b1edccc6626__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownXlFillIcon);
export default ForwardRef;

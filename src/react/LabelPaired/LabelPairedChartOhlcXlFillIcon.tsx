import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcXlFillIcon = (
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
      <path d='M15 6c.797 0 1.5.703 1.5 1.5V9H18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.5v13.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V24H12a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.5V7.5c0-.797.656-1.5 1.5-1.5m-9.75 9c.797 0 1.5.703 1.5 1.5V24h1.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.5v1.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V21h-1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.5v-1.5c0-.797.656-1.5 1.5-1.5m19.5-6c.797 0 1.5.703 1.5 1.5V18h1.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.5v1.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V15h-1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.5v-1.5c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='da8e5a466c5dd1d73f11961207c2f063__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcXlFillIcon);
export default ForwardRef;

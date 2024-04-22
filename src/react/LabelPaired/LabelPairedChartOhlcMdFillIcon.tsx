import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 4c.531 0 1 .469 1 1v1h1c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1v9c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-1H8c-.562 0-1-.437-1-1 0-.531.438-1 1-1h1V5c0-.531.438-1 1-1m-6.5 6c.531 0 1 .469 1 1v5h1c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1v1c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-5h-1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h1v-1c0-.531.438-1 1-1m13-4c.531 0 1 .469 1 1v5h1c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1v1c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-5h-1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h1V7c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='6cfa0cd75dc88972caef71fcc75e8c40__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcMdFillIcon);
export default ForwardRef;

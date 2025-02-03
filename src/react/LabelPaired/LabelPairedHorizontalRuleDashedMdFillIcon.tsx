import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedMdFillIcon = (
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
      <path d='M0 12c0-.531.438-1 1-1h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1m5.313 0c0-.531.468-1 1-1h2c.562 0 1 .469 1 1 0 .563-.438 1-1 1h-2c-.532 0-1-.437-1-1m5.343 0c0-.531.438-1 1-1h2c.563 0 1 .469 1 1 0 .563-.437 1-1 1h-2c-.562 0-1-.437-1-1M16 12c0-.531.438-1 1-1h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-2c-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='dbb26e819f4950d1e8acfd598147110a__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedMdFillIcon);
export default ForwardRef;

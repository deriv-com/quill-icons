import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m15.625 6.781-5 4a.99.99 0 0 1-1.25.031L6 8.283l-4.375 3.5a.996.996 0 0 1-1.406-.157c-.344-.406-.281-1.062.156-1.406l5-4c.344-.282.844-.282 1.219 0L9.969 8.75l4.406-3.531c.406-.344 1.063-.25 1.406.156.344.438.25 1.063-.156 1.406M5 12c0-.531.438-1 1-1 .531 0 1 .469 1 1v6c0 .563-.469 1-1 1-.562 0-1-.437-1-1zm-4 3c0-.531.438-1 1-1 .531 0 1 .469 1 1v3c0 .563-.469 1-1 1-.562 0-1-.437-1-1zm9-2c.531 0 1 .469 1 1v4c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-4c0-.531.438-1 1-1m3-1c0-.531.438-1 1-1 .531 0 1 .469 1 1v6c0 .563-.469 1-1 1-.562 0-1-.437-1-1z' />
    </g>
    <defs>
      <clipPath id='102e93a1de886dc3d62ff5c76acaf41d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedMdFillIcon);
export default ForwardRef;

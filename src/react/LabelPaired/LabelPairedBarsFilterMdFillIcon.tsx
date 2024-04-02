import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7c0-.531.438-1 1-1h12c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1m2 5c0-.531.438-1 1-1h8c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3c-.562 0-1-.437-1-1m7 5c0 .563-.469 1-1 1H6c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2c.531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='bcfb18b3c08d36224f8ca4f6d404d0c1__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterMdFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressMdFillIcon = (
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
      <path d='M5 6v3c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m-4 8h3c.531 0 1 .469 1 1v3c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-2H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1m10-8v2h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-3c-.562 0-1-.437-1-1V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m-1 8h3c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-2v2c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-3c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='cfb8ee6ba9dc426b269ff3102cb15640__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressMdFillIcon);
export default ForwardRef;

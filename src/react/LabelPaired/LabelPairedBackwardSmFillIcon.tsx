import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.55 15.809-4.675-3.91v-2.27l4.676-3.91a.89.89 0 0 1 .93-.137c.3.164.519.465.519.793v8.75a.88.88 0 0 1-.52.793c-.3.164-.656.11-.93-.11M7 13.375v1.75a.88.88 0 0 1-.52.793c-.3.164-.656.11-.93-.11L.3 11.435a.89.89 0 0 1-.3-.684c0-.246.11-.492.3-.656l5.25-4.375a.89.89 0 0 1 .93-.137c.301.164.52.465.52.793v7' />
    </g>
    <defs>
      <clipPath id='dd94ad766442b1ec433c998f0ac42200__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmFillIcon);
export default ForwardRef;

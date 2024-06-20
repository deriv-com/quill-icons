import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.34 6.84-8.777 8.75a.6.6 0 0 1-.903 0c-.273-.246-.273-.656 0-.93l8.75-8.722c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902m-7.027.41c0 .492-.274.902-.657 1.148-.41.247-.93.247-1.312 0A1.31 1.31 0 0 1 .687 7.25c0-.465.247-.875.657-1.121.383-.246.902-.246 1.312 0 .383.246.656.656.656 1.121m7 7c0 .492-.274.902-.657 1.148-.41.247-.93.247-1.312 0a1.31 1.31 0 0 1-.656-1.148c0-.465.246-.875.656-1.121.383-.246.902-.246 1.312 0 .383.246.656.656.656 1.121' />
    </g>
    <defs>
      <clipPath id='42d1464972ddcbb0f6915d7b709a8a5d__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentSmBoldIcon);
export default ForwardRef;

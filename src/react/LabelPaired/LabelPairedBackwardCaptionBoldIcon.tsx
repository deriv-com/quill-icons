import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 5.703v2.344l4.125-2.906A.64.64 0 0 1 11.273 5a.73.73 0 0 1 .727.727v7.57a.705.705 0 0 1-.703.703c-.164 0-.305-.023-.422-.117l-4.148-2.906v2.32a.69.69 0 0 1-.704.703.8.8 0 0 1-.398-.117L.211 9.969A.59.59 0 0 1 0 9.5c0-.164.07-.328.21-.445L5.626 5.14A.65.65 0 0 1 6.047 5a.72.72 0 0 1 .703.703m0 3.703v.211l4.125 2.883V6.523zM1.5 9.5l4.125 2.977v-5.93z' />
    </g>
    <defs>
      <clipPath id='c67a6aec4bcd1391214d855771b21df7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionBoldIcon);
export default ForwardRef;

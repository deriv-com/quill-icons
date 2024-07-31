import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardCaptionBoldIcon = (
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
      <path d='M5.25 5.703c0-.375.305-.703.703-.703.14 0 .281.047.399.14l5.414 3.915c.14.117.234.28.234.445a.61.61 0 0 1-.234.469l-5.414 3.914a.8.8 0 0 1-.399.117.69.69 0 0 1-.703-.703v-2.32l-4.148 2.906A.6.6 0 0 1 .703 14 .69.69 0 0 1 0 13.297v-7.57A.71.71 0 0 1 .703 5c.14 0 .281.047.399.14L5.25 8.048zm0 3.703L1.125 6.523V12.5L5.25 9.617zm5.227.094L6.375 6.547v5.93z' />
    </g>
    <defs>
      <clipPath id='b817a71cf29eebccd6ec73bb0f685deb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionBoldIcon);
export default ForwardRef;

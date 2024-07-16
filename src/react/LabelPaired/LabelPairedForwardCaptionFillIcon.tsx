import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardCaptionFillIcon = (
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
      <path d='M1.219 13.836a.71.71 0 0 1-.797.094.73.73 0 0 1-.422-.68v-7.5c0-.281.164-.54.422-.68a.77.77 0 0 1 .797.117L5.25 8.54v1.945zM6 11.75v-6c0-.281.164-.54.422-.68a.77.77 0 0 1 .797.117l4.5 3.75c.164.141.281.352.281.563a.78.78 0 0 1-.281.586l-4.5 3.75a.71.71 0 0 1-.797.094.73.73 0 0 1-.422-.68z' />
    </g>
    <defs>
      <clipPath id='ad758b3f78434a5865bc44650a73dc3e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionFillIcon);
export default ForwardRef;

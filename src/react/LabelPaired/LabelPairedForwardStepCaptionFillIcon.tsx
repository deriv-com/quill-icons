import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.469 13.836a.71.71 0 0 1-.797.094.73.73 0 0 1-.422-.68v-7.5c0-.281.164-.54.422-.68a.77.77 0 0 1 .797.117l4.5 3.75.281.211V5.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75v7.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V9.852l-.281.234z' />
    </g>
    <defs>
      <clipPath id='b12fb6daae6464ef6cd78d8912d36f49__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionFillIcon);
export default ForwardRef;

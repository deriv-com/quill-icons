import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 8.422a4.87 4.87 0 0 1-2.883-.914v4.172q0 1.218-.68 2.18a3.8 3.8 0 0 1-1.78 1.406 3.9 3.9 0 0 1-2.274.117q-1.125-.282-1.945-1.195a3.9 3.9 0 0 1-.915-2.086 3.87 3.87 0 0 1 2.063-3.82 3.96 3.96 0 0 1 2.25-.376v2.11a1.7 1.7 0 0 0-1.078.023q-.516.164-.867.633a1.76 1.76 0 0 0-.328 1.031q0 .54.328 1.031.35.445.89.61.516.187 1.078 0 .54-.188.868-.633t.328-1.031V3.5h2.062q0 .258.047.516A2.93 2.93 0 0 0 9.18 5.89a3 3 0 0 0 1.57.492z' />
    </g>
    <defs>
      <clipPath id='f0fbb6bed5b0cc5bda90b2fa5833cf1e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokCaptionIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneSmBoldIcon = (
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
      <path d='M6.813 6.375A1.33 1.33 0 0 0 5.5 5.063c-.738 0-1.312.601-1.312 1.312v4.375c0 .738.574 1.313 1.312 1.313.71 0 1.313-.575 1.313-1.313zm-3.938 0a2.626 2.626 0 0 1 5.25 0v4.375a2.626 2.626 0 0 1-5.25 0zM2 9.656v1.094a3.49 3.49 0 0 0 3.5 3.5c1.914 0 3.5-1.559 3.5-3.5V9.656C9 9.301 9.273 9 9.656 9c.356 0 .656.3.656.656v1.094c0 2.46-1.832 4.457-4.156 4.785v.902H7.47c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H3.53a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h1.313v-.902A4.814 4.814 0 0 1 .688 10.75V9.656C.688 9.301.96 9 1.344 9c.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='f2dcad974f372a85161df79ef034f045__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneSmBoldIcon);
export default ForwardRef;

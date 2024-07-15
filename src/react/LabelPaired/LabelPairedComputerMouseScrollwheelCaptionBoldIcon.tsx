import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 11.75v-4.5c0-1.43-1.195-2.625-2.625-2.625h-1.5A2.636 2.636 0 0 0 1.125 7.25v4.5a2.62 2.62 0 0 0 2.625 2.625h1.5a2.636 2.636 0 0 0 2.625-2.625M0 7.25A3.746 3.746 0 0 1 3.75 3.5h1.5A3.76 3.76 0 0 1 9 7.25v4.5a3.746 3.746 0 0 1-3.75 3.75h-1.5A3.73 3.73 0 0 1 0 11.75zm4.5-1.5c.398 0 .75.352.75.75v.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.5c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='a4743f25f1a9ba4ce5416b0536878c37__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelCaptionBoldIcon);
export default ForwardRef;

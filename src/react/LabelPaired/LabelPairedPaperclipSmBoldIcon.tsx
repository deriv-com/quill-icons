import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.629 5.746a1.85 1.85 0 0 0-2.598 0l-5.222 5.25c-1.204 1.203-1.204 3.145 0 4.32 1.175 1.204 3.117 1.204 4.32 0l4.156-4.156a.644.644 0 0 1 .902 0c.274.274.274.684 0 .93L8.06 16.246c-1.723 1.723-4.485 1.723-6.18 0-1.723-1.695-1.723-4.457 0-6.18l5.25-5.25c1.203-1.203 3.2-1.203 4.43 0 1.203 1.23 1.203 3.227 0 4.43l-5.032 5.031a2.052 2.052 0 0 1-3.062-.164 2.05 2.05 0 0 1 .164-2.734l4.156-4.156a.644.644 0 0 1 .902 0c.274.273.274.683 0 .93L4.56 12.308a.72.72 0 0 0-.055.984.73.73 0 0 0 1.094.055l5.03-5.032c.712-.71.712-1.859 0-2.57' />
    </g>
    <defs>
      <clipPath id='c78d46476166f68c458157ce9893a7d0__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipSmBoldIcon);
export default ForwardRef;

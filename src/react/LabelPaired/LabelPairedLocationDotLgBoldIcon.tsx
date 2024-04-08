import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 13c0-3.086-2.54-5.625-5.625-5.625A5.626 5.626 0 0 0 1.875 13c0 .508.156 1.25.586 2.266.39.937.977 2.03 1.64 3.125 1.133 1.797 2.422 3.515 3.399 4.765.938-1.25 2.227-2.968 3.36-4.765.663-1.094 1.25-2.188 1.64-3.125.43-1.016.625-1.758.625-2.266M15 13c0 3.438-4.57 9.492-6.602 12.031a1.178 1.178 0 0 1-1.835 0C4.57 22.492 0 16.438 0 13c0-4.14 3.36-7.5 7.5-7.5S15 8.86 15 13m-6.25 0c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25m-4.375 0c0-1.094.586-2.11 1.563-2.695.937-.547 2.148-.547 3.125 0 .937.586 1.562 1.601 1.562 2.695 0 1.133-.625 2.148-1.562 2.734-.977.547-2.188.547-3.126 0A3.16 3.16 0 0 1 4.376 13' />
    </g>
    <defs>
      <clipPath id='afa3fbd11801fed7d5d5ae38d686c480__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotLgBoldIcon);
export default ForwardRef;

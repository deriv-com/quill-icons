import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 14.578 3.281 18.75h8.39zm-1.078-2.11a1.445 1.445 0 0 1 2.11 0l6 6c.421.423.562 1.079.327 1.641-.234.563-.75.891-1.359.891h-12c-.61 0-1.172-.328-1.406-.89a1.52 1.52 0 0 1 .328-1.641z' />
    </g>
    <defs>
      <clipPath id='c1da25ab7022ebeb2ebe33b4fcccc14c__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpXlBoldIcon);
export default ForwardRef;

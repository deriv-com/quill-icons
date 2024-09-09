import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24 9.75H6c-.422 0-.75.375-.75.75V21H3V10.5c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3V21h-2.25V10.5c0-.375-.375-.75-.75-.75M4.5 26.25h21c.938 0 1.781-.61 2.11-1.5H2.343c.328.89 1.172 1.5 2.156 1.5M0 24c0-.797.656-1.5 1.5-1.5h27c.797 0 1.5.703 1.5 1.5 0 2.484-2.016 4.5-4.5 4.5h-21A4.5 4.5 0 0 1 0 24' />
    </g>
    <defs>
      <clipPath id='50a46247f2228e094e038cac542c5150__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlBoldIcon);
export default ForwardRef;

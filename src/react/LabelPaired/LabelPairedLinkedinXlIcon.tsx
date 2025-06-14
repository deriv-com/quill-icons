import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.5 7.5c.797 0 1.5.703 1.5 1.547V27c0 .844-.703 1.5-1.5 1.5H1.453C.656 28.5 0 27.844 0 27V9.047C0 8.203.656 7.5 1.453 7.5zm-13.172 18v-9.984H3.234V25.5zM4.781 14.11a1.78 1.78 0 0 0 1.782-1.782c0-.984-.797-1.828-1.782-1.828a1.83 1.83 0 0 0-1.828 1.828c0 .985.797 1.781 1.828 1.781M18 25.5v-5.484c0-2.672-.61-4.782-3.75-4.782-1.5 0-2.531.844-2.953 1.641h-.047v-1.36H8.297V25.5h3.094v-4.922c0-1.312.234-2.578 1.875-2.578 1.593 0 1.593 1.5 1.593 2.625V25.5z' />
    </g>
    <defs>
      <clipPath id='7bce93c620935878d71c37f10d0f8a93__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinXlIcon);
export default ForwardRef;

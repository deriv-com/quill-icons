import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightCaptionRegularIcon = (
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
      <path d='M7.375 7.063q0 .727-.328 1.335-.352.61-.914.985.726.351 1.172 1.031t.445 1.524q-.025 1.194-.82 1.992-.798.796-1.992.82H3.063q-1.195-.024-1.993-.82-.796-.798-.82-1.992 0-.844.445-1.524a2.87 2.87 0 0 1 1.172-1.031 2.9 2.9 0 0 1-.914-.985 2.8 2.8 0 0 1-.328-1.335q.025-1.195.82-1.993.798-.796 1.993-.82h1.124q1.195.024 1.993.82.795.798.82 1.992M4.563 9.875H3.062q-.867.024-1.453.61-.585.585-.609 1.453.024.867.61 1.453.585.585 1.453.609h1.874q.868-.024 1.454-.61.585-.585.609-1.453-.024-.867-.61-1.453-.585-.585-1.452-.609zm0-.75q.867-.024 1.453-.61.585-.585.609-1.453-.024-.867-.61-1.453Q5.43 5.024 4.564 5H3.438q-.868.024-1.454.61-.585.585-.609 1.452.024.868.61 1.454.585.585 1.453.609z' />
    </g>
    <defs>
      <clipPath id='f9a1479812691761__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightCaptionRegularIcon);
export default ForwardRef;

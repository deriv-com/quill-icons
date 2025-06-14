import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.906 9.875H8.97a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h2.46l-.738-.876C9.79 6.622 8.477 5.938 7 5.938a4.8 4.8 0 0 0-4.812 4.813A4.785 4.785 0 0 0 7 15.563a4.77 4.77 0 0 0 2.871-.958c.3-.218.711-.164.93.137s.164.711-.137.93A6.07 6.07 0 0 1 7 16.875 6.115 6.115 0 0 1 .875 10.75C.875 7.387 3.609 4.625 7 4.625c1.887 0 3.582.875 4.703 2.215l.547.656V5.281c0-.355.273-.656.656-.656.356 0 .656.3.656.656V9.22c0 .383-.3.656-.656.656' />
    </g>
    <defs>
      <clipPath id='34b8c05ca140e45ab35d19366d30379f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightSmBoldIcon);
export default ForwardRef;

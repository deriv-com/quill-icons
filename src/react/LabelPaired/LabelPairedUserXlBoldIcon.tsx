import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserXlBoldIcon = (
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
      <path d='M14.25 12c0-1.312-.75-2.531-1.875-3.234-1.172-.657-2.625-.657-3.75 0C7.453 9.469 6.75 10.688 6.75 12c0 1.36.703 2.578 1.875 3.281 1.125.656 2.578.656 3.75 0C13.5 14.578 14.25 13.36 14.25 12M4.5 12a5.95 5.95 0 0 1 3-5.156c1.828-1.078 4.125-1.078 6 0 1.828 1.078 3 3.047 3 5.156 0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 4.5 12M2.297 27.75h16.36c-.423-2.953-2.954-5.25-6.048-5.25H8.344c-3.094 0-5.625 2.297-6.047 5.25M0 28.64c0-4.64 3.703-8.39 8.344-8.39h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64' />
    </g>
    <defs>
      <clipPath id='69e537350948e79582685c718307d080__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserXlBoldIcon);
export default ForwardRef;

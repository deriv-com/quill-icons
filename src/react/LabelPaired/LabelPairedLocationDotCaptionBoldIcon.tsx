import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotCaptionBoldIcon = (
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
      <path d='M7.875 8A3.39 3.39 0 0 0 4.5 4.625 3.376 3.376 0 0 0 1.125 8c0 .305.094.75.352 1.36.234.562.585 1.218.984 1.874a36 36 0 0 0 2.039 2.86c.563-.75 1.336-1.781 2.016-2.86.398-.656.75-1.312.984-1.875.258-.609.375-1.054.375-1.359M9 8c0 2.063-2.742 5.695-3.96 7.219a.707.707 0 0 1-1.102 0C2.742 13.695 0 10.063 0 8a4.501 4.501 0 0 1 9 0M5.25 8a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M2.625 8c0-.656.352-1.266.938-1.617a1.91 1.91 0 0 1 1.874 0c.563.351.938.96.938 1.617 0 .68-.375 1.29-.937 1.64a1.91 1.91 0 0 1-1.875 0A1.9 1.9 0 0 1 2.625 8' />
    </g>
    <defs>
      <clipPath id='43bd39fc37d1d9615620f387509ac21b__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotCaptionBoldIcon);
export default ForwardRef;

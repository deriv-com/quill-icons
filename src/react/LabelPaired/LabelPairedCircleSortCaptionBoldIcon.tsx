import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.258-3.633 2.25 2.25c.094.117.14.281.07.422a.37.37 0 0 1-.328.211h-4.5c-.164 0-.305-.07-.352-.21-.07-.142-.023-.306.07-.423l2.25-2.25c.141-.14.4-.14.54 0m-.54 7.29-2.25-2.25c-.093-.118-.14-.282-.07-.423a.36.36 0 0 1 .352-.234h4.5c.14 0 .281.094.328.234.07.141.024.305-.07.422l-2.25 2.25a.397.397 0 0 1-.54 0' />
    </g>
    <defs>
      <clipPath id='bba59738da8c127da40d5d3e1d4acedd__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortCaptionBoldIcon);
export default ForwardRef;

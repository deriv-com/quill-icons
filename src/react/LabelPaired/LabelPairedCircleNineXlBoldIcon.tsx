import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12-3.75c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25.422.703 1.125 1.125 1.969 1.125.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25-.422-.656-1.125-1.125-1.922-1.125m-1.219 6.61C8.86 20.296 7.5 18.562 7.5 16.5a4.501 4.501 0 0 1 9 0c0 1.547-.703 3-1.828 3.984l-3.844 3.282a1.17 1.17 0 0 1-1.594-.141 1.17 1.17 0 0 1 .141-1.594z' />
    </g>
    <defs>
      <clipPath id='95967ed9e3640789f255afce7fa22ece__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineXlBoldIcon);
export default ForwardRef;

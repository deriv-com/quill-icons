import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m3.422 7.828 13.5 8.25C17.578 16.5 18 17.25 18 18c0 .797-.422 1.547-1.078 1.922l-13.5 8.25c-.703.422-1.594.469-2.297.047C.422 27.844 0 27.094 0 26.25V9.75c0-.797.422-1.547 1.125-1.922a2.24 2.24 0 0 1 2.297 0' />
    </g>
    <defs>
      <clipPath id='25c16c9dd51cd9792235061b3cf22ee6__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayXlRegularIcon = (
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
      <path d='M2.625 9.14a.85.85 0 0 0-.75-.046c-.234.14-.422.422-.422.656v16.5c0 .281.188.563.422.656a.72.72 0 0 0 .75 0l13.5-8.25A.75.75 0 0 0 16.5 18c0-.234-.14-.469-.375-.61zm-1.5-1.312a2.24 2.24 0 0 1 2.297 0l13.5 8.25C17.578 16.5 18 17.25 18 18c0 .797-.422 1.547-1.078 1.922l-13.5 8.25a2.14 2.14 0 0 1-2.297.047C.422 27.844 0 27.094 0 26.25V9.75c0-.797.422-1.547 1.125-1.922' />
    </g>
    <defs>
      <clipPath id='b7936dfdac43f709715f753bc6f0b193__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 19H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h3.656c.532 0 1.032.219 1.407.594l.843.843c.375.375.875.563 1.407.563H13c1.094 0 2 .906 2 2v1h-1.5V9c0-.25-.25-.5-.5-.5H9.313c-.938 0-1.813-.344-2.47-1L6 6.656a.5.5 0 0 0-.344-.156H2c-.281 0-.5.25-.5.5v8.188L3.625 11.5c.188-.312.5-.5.875-.5H17c.344 0 .688.188.844.5.187.313.187.719 0 1.031l-3.5 6c-.188.282-.5.469-.844.469z' />
    </g>
    <defs>
      <clipPath id='c93bb734c61979e3740418844f40454c__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenMdBoldIcon);
export default ForwardRef;

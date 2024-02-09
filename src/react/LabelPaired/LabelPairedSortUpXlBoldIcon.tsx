import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 10.078 3.328 14.25h8.344zM6.422 7.922A1.56 1.56 0 0 1 7.5 7.5q.61 0 1.078.422l6 6q.657.75.328 1.64-.422.891-1.406.938h-12q-.984-.047-1.406-.937-.329-.891.328-1.641z' />
    </g>
    <defs>
      <clipPath id='5220143835b5df7dcd7c9ecac67ad285__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpXlBoldIcon);
export default ForwardRef;

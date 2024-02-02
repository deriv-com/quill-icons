import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.781 8.281 7.062 12l3.72 3.719q.435.531 0 1.062-.533.438-1.063 0L6 13.063 2.281 16.78q-.531.438-1.062 0-.438-.531 0-1.062L4.937 12 1.22 8.281q-.438-.531 0-1.062.531-.438 1.062 0L6 10.937 9.719 7.22q.531-.438 1.062 0 .438.531 0 1.062' />
    </g>
    <defs>
      <clipPath id='16278b41d8ace01765d53e23f4800fb5__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkMdBoldIcon);
export default ForwardRef;

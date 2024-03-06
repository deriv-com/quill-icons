import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.313 4.625q.41.027.437.438-.027.41-.437.437H1.25v3.063q-.027.41-.437.437-.411-.027-.438-.437v-3.5q.027-.411.438-.438zM.374 12.938q.027-.411.438-.438.41.027.437.438V16h3.063q.41.027.437.438-.027.41-.437.437h-3.5q-.411-.027-.438-.437zm11.813-8.313q.41.027.437.438v3.5q-.027.41-.437.437-.411-.027-.438-.437V5.5H8.688q-.411-.027-.438-.437.027-.411.438-.438zm-.438 8.313q.027-.411.438-.438.41.027.437.438v3.5q-.027.41-.437.437h-3.5q-.411-.027-.438-.437.027-.411.438-.438h3.062z' />
    </g>
    <defs>
      <clipPath id='1d429ecf667626520de9b102fed4bbef__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandSmRegularIcon);
export default ForwardRef;

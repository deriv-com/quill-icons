import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.469 11.469 6-6q.531-.438 1.062 0 .438.531 0 1.062L3.062 12l5.47 5.469q.435.531 0 1.062-.533.438-1.063 0l-6-6q-.438-.531 0-1.062m12-6q.531-.438 1.062 0 .438.531 0 1.062L9.062 12l5.47 5.469q.435.531 0 1.062-.533.438-1.063 0l-6-6q-.438-.531 0-1.062z' />
    </g>
    <defs>
      <clipPath id='300f7f1b0caef030d4437bf784df21f9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightMdBoldIcon = (
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
      <path d='M14.531 11.469q.438.531 0 1.062l-6 6q-.531.438-1.062 0-.438-.531 0-1.062L12.938 12l-5.47-5.469q-.435-.531 0-1.062.533-.438 1.063 0zm-12-6 6 6q.438.531 0 1.062l-6 6q-.531.438-1.062 0-.438-.531 0-1.062L6.938 12l-5.47-5.469q-.435-.531 0-1.062.533-.438 1.063 0' />
    </g>
    <defs>
      <clipPath id='9395361bacd5436326f44047e17f8d0f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightMdBoldIcon);
export default ForwardRef;

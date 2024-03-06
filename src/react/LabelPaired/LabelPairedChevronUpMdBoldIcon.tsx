import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpMdBoldIcon = (
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
      <path d='M7.469 7.469q.531-.438 1.062 0l6 6q.438.531 0 1.062-.531.438-1.062 0L8 9.062l-5.469 5.47q-.531.435-1.062 0-.438-.533 0-1.063z' />
    </g>
    <defs>
      <clipPath id='d9339803b425479b716e74c19dc72d32__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpMdBoldIcon);
export default ForwardRef;

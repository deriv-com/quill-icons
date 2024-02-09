import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.055 9.875H.563q-.411-.027-.438-.437Q.152 9.027.563 9h.683q.601-1.94 2.188-3.145 1.585-1.203 3.691-1.23h1.34q.41.027.437.438-.027.41-.437.437h-1.34q-1.75.027-3.062.984A5.3 5.3 0 0 0 2.176 9h5.387q.41.027.437.438-.027.41-.437.437H1.957a4.7 4.7 0 0 0 0 1.75h5.606q.41.027.437.438-.027.41-.437.437H2.176a5.3 5.3 0 0 0 1.886 2.516q1.313.957 3.063.984h1.34q.41.027.437.438-.027.41-.437.437h-1.34q-2.106-.027-3.691-1.23-1.587-1.203-2.188-3.145H.563q-.411-.027-.438-.437.027-.411.438-.438h.492a7 7 0 0 1 0-1.75' />
    </g>
    <defs>
      <clipPath id='092470e3167f9507d908873d7ae9d438__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignSmRegularIcon);
export default ForwardRef;

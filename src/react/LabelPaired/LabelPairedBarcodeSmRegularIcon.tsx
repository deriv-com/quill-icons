import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.063q.027-.411.438-.438.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437zm1.75 0q.027-.411.438-.438.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437zm2.188-.438q.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437V5.063q.027-.411.438-.438m2.187.438q.027-.411.438-.438.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437zm2.188-.438q.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437V5.063q.027-.411.438-.438m2.187.438q.027-.411.438-.438.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437zm3.063-.438q.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437V5.063q.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='5d740b78f20493368e361c45072e8580__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeSmRegularIcon);
export default ForwardRef;

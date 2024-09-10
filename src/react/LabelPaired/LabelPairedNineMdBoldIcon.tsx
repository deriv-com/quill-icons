import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 10c0 1.938 1.563 3.5 3.5 3.5 1 0 1.906-.406 2.531-1.094l.188-.187c.5-.625.781-1.406.781-2.219 0-1.906-1.594-3.5-3.5-3.5-1.937 0-3.5 1.594-3.5 3.5m3.938 5H5c-2.781 0-5-2.219-5-5 0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5 0 1.313-.5 2.5-1.312 3.375L4.312 18.75c-.25.313-.718.344-1.062.094-.312-.25-.344-.719-.094-1.063z' />
    </g>
    <defs>
      <clipPath id='21246747562595122be56df6a61091b5__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreMdIcon = (
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
      <path d='m8 7.781-.281-.5q-.344-.468-.875-.218-.47.343-.219.875l.625 1.125-2.062 3.593H3.563q-.594.062-.657.656.062.563.656.626h5.782q.219-.438 0-.844-.22-.407-.719-.438H6.656l2.719-4.719q.25-.53-.219-.875-.531-.25-.875.22zm-2.469 6.813q-.5-.594-1.25-.375l-.468.812q-.25.531.25.844.53.25.875-.219zm5.282-1.938a4 4 0 0 1-.157-.281 223 223 0 0 0-1.719-2.969q-.312.25-.468.844-.125.625.25 1.313.375.656.906 1.593.625 1.063 1.438 2.5.343.47.874.219.47-.312.25-.875l-.624-1.062h.906q.594-.062.656-.626-.062-.593-.656-.656zM8 4.25q2.157.03 3.906 1.063a7.74 7.74 0 0 1 2.781 2.78Q15.72 9.845 15.75 12q-.03 2.157-1.062 3.906a7.74 7.74 0 0 1-2.782 2.781Q10.156 19.72 8 19.75q-2.156-.03-3.906-1.062a7.74 7.74 0 0 1-2.782-2.782Q.283 14.156.25 12q.03-2.156 1.063-3.906a7.74 7.74 0 0 1 2.78-2.781Q5.845 4.28 8 4.25M14.75 12q-.063-2.875-1.969-4.781Q10.844 5.313 8 5.25q-2.875.063-4.781 1.969Q1.313 9.156 1.25 12q.063 2.875 1.969 4.781Q5.156 18.687 8 18.75q2.875-.063 4.781-1.969Q14.687 14.844 14.75 12' />
    </g>
    <defs>
      <clipPath id='0f38e08e76f4bac2318491dcb3267704__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreMdIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 6.375a.85.85 0 0 0-.629.246A.85.85 0 0 0 1 7.25v7q0 .383.246.629a.85.85 0 0 0 .629.246h12.25a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-1.75.875q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zm2.406.219h.438q.41.027.437.437v.438q-.027.41-.437.437H2.53q-.41-.027-.437-.437v-.438q.027-.41.437-.437m-.437 3.062q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437H2.53q-.41-.027-.437-.437zm.437 2.188h.438q.41.027.437.437v.438q-.027.41-.437.437H2.53q-.41-.027-.437-.437v-.438q.027-.41.437-.437M4.72 7.906q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437zm.437 2.188h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437v-.438q.027-.41.437-.437m2.188-2.188q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437H7.78q-.41-.027-.437-.437zm.437 2.188h.438q.41.027.437.437v.438q-.027.41-.437.437H7.78q-.41-.027-.437-.437v-.438q.027-.41.437-.437M9.97 7.906q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437zm.437 2.188h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437v-.438q.027-.41.437-.437m2.188-2.188q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437zm.437 2.188h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437v-.438q.027-.41.437-.437m-.437 3.062q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437zm-7.656-.219h6.125q.41.028.437.438-.027.41-.437.438H4.937q-.41-.028-.437-.438.027-.41.438-.437' />
    </g>
    <defs>
      <clipPath id='f4bdc0e98c744917ef505014a0e87304__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardSmRegularIcon);
export default ForwardRef;

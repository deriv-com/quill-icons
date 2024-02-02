import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoSmRegularIcon = (
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
      <path d='M1.875 6.375a.85.85 0 0 0-.629.246A.85.85 0 0 0 1 7.25v7q0 .383.246.629a.85.85 0 0 0 .629.246h7a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-1.75.875q.027-.738.52-1.23.492-.493 1.23-.52h7q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23zm14.191 7.738L11.5 13.43v-.985l3.254 1.778q.027.027.082.027.137 0 .164-.164V7.414a.19.19 0 0 0-.164-.164q-.055 0-.082.027L11.5 9.055V8.07l2.816-1.558q.246-.137.52-.137.438 0 .738.3.3.301.301.74v6.67q0 .439-.3.74-.301.3-.74.3-.272 0-.519-.137' />
    </g>
    <defs>
      <clipPath id='7b201073de03f45e__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoSmRegularIcon);
export default ForwardRef;

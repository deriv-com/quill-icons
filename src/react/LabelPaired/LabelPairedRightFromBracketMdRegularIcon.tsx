import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketMdRegularIcon = (
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
      <path d='m14.969 11.938-4.125-3.876Q10.78 8 10.719 8a.244.244 0 0 0-.219.219V10q-.03.47-.5.5H6.25q-.22.03-.25.25v2.5q.03.22.25.25H10q.47.031.5.5v1.781q.03.188.219.219.062 0 .125-.062l4.125-3.876q.03-.03.031-.062 0-.031-.031-.062M16 12q0 .47-.344.781l-4.125 3.906q-.344.313-.812.313-.531 0-.875-.344t-.344-.875V14.5H6.25q-.531 0-.875-.375Q5 13.781 5 13.25v-2.5q0-.531.375-.875.344-.375.875-.375H9.5V8.219q0-.531.344-.875T10.719 7q.468 0 .812.344l4.125 3.875q.345.313.344.781M5.5 6h-3a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 1 7.5v9q.03.625.438 1.063.436.405 1.062.437h3q.47.031.5.5-.03.47-.5.5h-3q-1.062-.03-1.781-.719Q.03 17.562 0 16.5v-9q.03-1.062.719-1.781Q1.438 5.03 2.5 5h3q.47.031.5.5-.03.47-.5.5' />
    </g>
    <defs>
      <clipPath id='297305182fdb9a854e53441f3f3142c6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketMdRegularIcon);
export default ForwardRef;

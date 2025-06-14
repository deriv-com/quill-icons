import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.219 9.813c-.313.28-.782.25-1.031-.063A.747.747 0 0 1 .25 8.688C2.844 6.406 6.25 5 10 5c3.719 0 7.125 1.406 9.719 3.688a.78.78 0 0 1 .093 1.062.747.747 0 0 1-1.062.063A13.2 13.2 0 0 0 10 6.5c-3.375 0-6.437 1.25-8.781 3.313M10 12a7.67 7.67 0 0 0-5.25 2.063A.747.747 0 0 1 3.688 14a.774.774 0 0 1 .03-1.062C5.376 11.438 7.564 10.5 10 10.5c2.406 0 4.594.938 6.25 2.438.281.28.313.75.031 1.062a.746.746 0 0 1-1.062.063A7.65 7.65 0 0 0 10 12m1.75 5.25a1.76 1.76 0 0 1-.875 1.531c-.562.313-1.219.313-1.75 0-.562-.312-.875-.875-.875-1.531 0-.625.313-1.187.875-1.5.531-.312 1.188-.312 1.75 0 .531.313.875.875.875 1.5' />
    </g>
    <defs>
      <clipPath id='30a3f4d39a0f2399a1302f749240794f__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiMdBoldIcon);
export default ForwardRef;

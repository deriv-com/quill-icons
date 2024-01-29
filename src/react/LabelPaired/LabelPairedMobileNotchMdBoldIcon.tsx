import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5.5V6q-.03.47-.5.5h-3Q4.031 6.47 4 6v-.5H3a.97.97 0 0 0-.719.281A.97.97 0 0 0 2 6.5v11q0 .438.281.719A.97.97 0 0 0 3 18.5h6a.97.97 0 0 0 .719-.281A.97.97 0 0 0 10 17.5v-11a.97.97 0 0 0-.281-.719A.97.97 0 0 0 9 5.5zm-7.5 1q.03-1.062.719-1.781Q1.938 4.03 3 4h6q1.062.03 1.781.719.688.719.719 1.781v11q-.03 1.062-.719 1.781Q10.062 19.97 9 20H3q-1.062-.03-1.781-.719Q.53 18.562.5 17.5z' />
    </g>
    <defs>
      <clipPath id='94b2986fb14f15e2a30a3c972e303746__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchMdBoldIcon);
export default ForwardRef;

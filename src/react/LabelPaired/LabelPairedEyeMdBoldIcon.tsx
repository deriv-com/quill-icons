import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 6.5q-1.53.031-2.781.625A7.7 7.7 0 0 0 4 8.625a10.7 10.7 0 0 0-1.531 1.75A14 14 0 0 0 1.53 12q.344.719.938 1.625.625.906 1.531 1.75a7.7 7.7 0 0 0 2.219 1.5q1.25.594 2.781.625 1.53-.031 2.781-.625a7.7 7.7 0 0 0 2.219-1.5 10.7 10.7 0 0 0 1.531-1.75q.594-.906.938-1.625-.344-.719-.938-1.625A10.7 10.7 0 0 0 14 8.625a7.7 7.7 0 0 0-2.219-1.5Q10.531 6.531 9 6.5M2.969 7.531A10.2 10.2 0 0 1 5.594 5.75Q7.094 5.03 9 5q1.906.03 3.406.75t2.625 1.781q1.095 1.032 1.813 2.125.718 1.095 1.093 1.969.157.375 0 .75-.375.875-1.093 1.969-.72 1.093-1.813 2.125a10.2 10.2 0 0 1-2.625 1.781q-1.5.72-3.406.75-1.905-.03-3.406-.75-1.5-.72-2.625-1.781a12 12 0 0 1-1.813-2.125Q.438 13.249.094 12.375a.94.94 0 0 1 0-.75q.343-.875 1.062-1.969.72-1.093 1.813-2.125M9 14.5q1.062-.03 1.781-.719.688-.719.719-1.781-.03-1.062-.719-1.781Q10.062 9.53 9 9.5h-.062Q9 9.75 9 10q-.03.844-.594 1.406Q7.843 11.97 7 12q-.25 0-.5-.062V12q.03 1.062.719 1.781.719.688 1.781.719M9 8q1.095 0 2 .531A4.13 4.13 0 0 1 12.469 10q.531.938.531 2t-.531 2A4.13 4.13 0 0 1 11 15.469 3.9 3.9 0 0 1 9 16q-1.094 0-2-.531A4.13 4.13 0 0 1 5.531 14 4 4 0 0 1 5 12q0-1.062.531-2A4.13 4.13 0 0 1 7 8.531 3.9 3.9 0 0 1 9 8' />
    </g>
    <defs>
      <clipPath id='c6d49a0293a13f9a50e7dd70de252af9__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeMdBoldIcon);
export default ForwardRef;

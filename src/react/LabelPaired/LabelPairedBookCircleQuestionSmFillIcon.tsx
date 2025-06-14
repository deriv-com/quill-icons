import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 6.375A2.626 2.626 0 0 1 2.875 3.75h8.75a.9.9 0 0 1 .875.875v4.566A4.815 4.815 0 0 0 9 13.812v.438H2.875a.88.88 0 0 0-.875.875c0 .492.383.875.875.875H9.52c.355.71.875 1.313 1.503 1.75H2.875A2.626 2.626 0 0 1 .25 15.125zm3.5 1.313c0 .246.191.437.438.437h5.25a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438h-5.25a.45.45 0 0 0-.438.438m0 1.75c0 .246.191.437.438.437h5.25a.45.45 0 0 0 .437-.437A.47.47 0 0 0 9.438 9h-5.25a.45.45 0 0 0-.438.438m6.125 4.374c0-2.16 1.75-3.937 3.938-3.937 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m2.188-1.257v.164c0 .246.19.437.437.437a.45.45 0 0 0 .438-.437v-.164c0-.137.109-.274.246-.274h1.12c.192 0 .383.192.383.383 0 .164-.082.274-.218.356l-.875.437a.48.48 0 0 0-.219.41v.383c0 .246.191.438.438.438a.45.45 0 0 0 .437-.438v-.137l.629-.328c.41-.219.684-.656.684-1.12 0-.684-.575-1.231-1.258-1.231h-1.121c-.63 0-1.121.492-1.121 1.12m1.093 3.226c0 .383.274.656.656.656a.65.65 0 0 0 .657-.656c0-.355-.301-.656-.656-.656-.383 0-.657.3-.657.656' />
    </g>
    <defs>
      <clipPath id='d56bed5a3f191f27ed1ca5bde50508fb__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionSmFillIcon);
export default ForwardRef;

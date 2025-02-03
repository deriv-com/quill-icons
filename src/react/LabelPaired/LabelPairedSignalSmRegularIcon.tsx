import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalSmRegularIcon = (
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
      <path d='M16.438 4.188v13.125a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437V4.188A.45.45 0 0 1 16 3.75a.47.47 0 0 1 .438.438M12.5 6.374a.47.47 0 0 1 .438.438v10.5a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437v-10.5a.45.45 0 0 1 .437-.438M9.438 9.438v7.874A.45.45 0 0 1 9 17.75a.43.43 0 0 1-.437-.437V9.438A.45.45 0 0 1 9 9a.47.47 0 0 1 .438.438M5.5 11.625a.47.47 0 0 1 .438.438v5.25a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437v-5.25a.45.45 0 0 1 .437-.438M2 14.25a.47.47 0 0 1 .438.438v2.624A.45.45 0 0 1 2 17.75a.43.43 0 0 1-.437-.437v-2.625A.45.45 0 0 1 2 14.25' />
    </g>
    <defs>
      <clipPath id='f3948e33280482f488323590766f44d1__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalSmRegularIcon);
export default ForwardRef;

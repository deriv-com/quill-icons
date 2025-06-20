import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeSmRegularIcon = (
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
      <path d='M1.875 5.5A.88.88 0 0 0 1 6.375v8.75c0 .492.383.875.875.875h12.25a.88.88 0 0 0 .875-.875v-8.75a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zM2.75 7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm7.875 0a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm2.188-.438a.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V7.687a.45.45 0 0 1 .438-.437M4.5 7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm2.188-.438a.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V7.687a.45.45 0 0 1 .438-.437m1.75.438a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438v6.125a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437z' />
    </g>
    <defs>
      <clipPath id='1afcf592f5d778bf5757d6cf8ae38341__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeSmRegularIcon);
export default ForwardRef;

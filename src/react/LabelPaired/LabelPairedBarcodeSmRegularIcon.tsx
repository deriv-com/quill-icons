import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm1.75 0a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm2.188-.438a.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.063a.45.45 0 0 1 .438-.438m2.187.438a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm2.188-.438a.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.063a.45.45 0 0 1 .438-.438m2.187.438a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437zm3.063-.438a.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.063a.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='02316676ba07368fc4ff3dbf3a3d7af0__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeSmRegularIcon);
export default ForwardRef;

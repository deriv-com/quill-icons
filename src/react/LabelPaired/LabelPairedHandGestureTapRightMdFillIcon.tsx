import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightMdFillIcon = (
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
      <path d='M13.625 9.969A.76.76 0 0 1 14 11l-2.344 4.969c-.094.156 0 .344.125.406.188.063.344 0 .438-.156l.437-.969c.031.031.063.094.094.125l.188.438c.156.343.156.718 0 1.062l-.313.656a2.45 2.45 0 0 1-1.656 1.375l-.125.032c-.688.187-1.438.093-2.094-.22l-2.094-1c-1.25-.562-1.781-2.062-1.187-3.312l.812-1.687a.95.95 0 0 1 1.25-.469c.219.125.375.313.469.531a.89.89 0 0 1 1.188-.406c.25.094.374.281.468.5a.966.966 0 0 1 1.219-.406c.219.125.375.281.469.5l1.25-2.625c.156-.375.625-.563 1.031-.375m-2 1.312.531-1.094c.281-.593 1.031-.874 1.656-.593.626.312.876 1.062.594 1.687l-.469.969a2.02 2.02 0 0 0 1.438-1.937c0-1.094-.875-2-2-2-1.094 0-2 .906-2 2 0 .343.094.687.25.968M16.375 5c-.312 0-.594.281-.594.625v12.781c0 .344.281.594.594.594.344 0 .625-.25.625-.594V5.625A.627.627 0 0 0 16.375 5' />
    </g>
    <defs>
      <clipPath id='6c78937e2f7329602e16e455a5bac1ed__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightMdFillIcon);
export default ForwardRef;

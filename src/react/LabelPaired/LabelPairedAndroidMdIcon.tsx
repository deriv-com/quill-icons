import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidMdIcon = (
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
      <path d='M13.125 13.438a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75c0 .437.344.75.75.75m-8.281 0a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75c0 .437.343.75.75.75m8.562-4.5c2.563 1.406 4.313 4 4.594 7.062H0c.25-3.062 2-5.656 4.563-7.062l-1.5-2.594a.28.28 0 0 1 0-.313q.093-.187.28-.187c.126 0 .22.093.282.187l1.5 2.625a9.49 9.49 0 0 1 7.719 0l1.5-2.625c.062-.093.156-.187.281-.187q.188 0 .281.187a.28.28 0 0 1 0 .313z' />
    </g>
    <defs>
      <clipPath id='f2fb01a3e93405b349a7bfa1391086ce__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidMdIcon);
export default ForwardRef;

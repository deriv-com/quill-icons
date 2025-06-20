import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineMdBoldIcon = (
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
      <path d='m.406 17.719.719-2.438c.125-.437.375-.844.688-1.156l9.5-9.5a2.02 2.02 0 0 1 2.843 0l1.219 1.219c.094.093.188.218.25.312a1.994 1.994 0 0 1-.25 2.532l-9.5 9.5c-.031.03-.094.062-.125.125a3.3 3.3 0 0 1-1.031.562l-2.438.719-1.344.375a.64.64 0 0 1-.718-.188.64.64 0 0 1-.188-.718zm1.938-1.282-.5 1.72 1.719-.5.718-.22c.219-.062.375-.156.532-.312l7.156-7.156L10.03 8.03l-7.156 7.156c-.031 0-.031.032-.062.063-.126.125-.188.281-.25.469zM7.75 18.5h9.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-9.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='a5261ed92e223fd2bf5753fa784b38b6__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineMdBoldIcon);
export default ForwardRef;

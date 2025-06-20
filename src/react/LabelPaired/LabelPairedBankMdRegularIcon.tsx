import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.219 4.094 15.5 8.187c.313.188.5.5.5.844A.98.98 0 0 1 15 10H.969A.974.974 0 0 1 0 9.031c0-.344.188-.656.469-.844L7.75 4.095c.156-.094.344-.094.469 0M9.563 9h5.343L8 5.094 1.063 9h5.343c-.125-.219-.156-.469-.156-.75 0-.937.781-1.75 1.75-1.75.938 0 1.75.813 1.75 1.75q0 .422-.187.75M8 7.5a.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75A.76.76 0 0 0 8 7.5M2 15v-4h1v4h2.5v-4h1v4h3v-4h1v4H13v-4h1v4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m-.75 2h13.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H1.25a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5M.5 19h15c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='9f11f1ba66e74e26d2ce12d79704957b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankMdRegularIcon);
export default ForwardRef;

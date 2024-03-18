import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 5.719a1.08 1.08 0 0 1 1.094-1.094H2.78c.602 0 1.094.492 1.094 1.094V7.03a1.08 1.08 0 0 1-1.094 1.094H1.47A1.063 1.063 0 0 1 .375 7.031zm0 4.375A1.08 1.08 0 0 1 1.469 9H2.78c.602 0 1.094.492 1.094 1.094v1.312A1.08 1.08 0 0 1 2.781 12.5H1.47a1.063 1.063 0 0 1-1.094-1.094zm3.5 4.375v1.312a1.08 1.08 0 0 1-1.094 1.094H1.47a1.063 1.063 0 0 1-1.094-1.094V14.47a1.08 1.08 0 0 1 1.094-1.094H2.78c.602 0 1.094.492 1.094 1.094m.875-8.75a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094V7.03a1.08 1.08 0 0 1-1.094 1.094H5.844A1.063 1.063 0 0 1 4.75 7.031zm3.5 4.375v1.312A1.08 1.08 0 0 1 7.156 12.5H5.844a1.063 1.063 0 0 1-1.094-1.094v-1.312A1.08 1.08 0 0 1 5.844 9h1.312c.602 0 1.094.492 1.094 1.094m-3.5 4.375a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H5.844a1.063 1.063 0 0 1-1.094-1.094zm7.875-8.75V7.03a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094V5.72a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094m-3.5 4.375A1.08 1.08 0 0 1 10.219 9h1.312c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094zm3.5 4.375v1.312a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094V14.47a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094' />
    </g>
    <defs>
      <clipPath id='c36c01f7b9ccf75f2f62d7aadbd49ee9__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridSmFillIcon);
export default ForwardRef;

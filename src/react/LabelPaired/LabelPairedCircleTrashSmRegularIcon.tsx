import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashSmRegularIcon = (
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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m4.375-3.062h1.121l.3-.301a.45.45 0 0 1 .329-.137h1.75a.44.44 0 0 1 .3.137l.302.3h1.148a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.438h-.082l-.3 4.894c-.056.438-.438.793-.876.793H5.605a.86.86 0 0 1-.847-.793L4.43 8.562h-.055a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.437m4.293.875H5.305l.3 4.812h2.762z' />
    </g>
    <defs>
      <clipPath id='29dcb9f2c95d6068cc50994cc9a59be8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashSmRegularIcon);
export default ForwardRef;

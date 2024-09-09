import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.5 8.875c0 1.188-.531 2.25-1.375 2.969A3.82 3.82 0 0 1 10 15.125 3.874 3.874 0 0 1 6.125 19h-2.25A3.855 3.855 0 0 1 0 15.125c0-1.375.719-2.625 1.844-3.281C1 11.125.5 10.063.5 8.875A3.874 3.874 0 0 1 4.375 5h1.25C7.75 5 9.5 6.75 9.5 8.875M5.625 12.75h-1.75a2.374 2.374 0 1 0 0 4.75h2.25a2.374 2.374 0 1 0 0-4.75zm0-1.5a2.374 2.374 0 1 0 0-4.75h-1.25a2.374 2.374 0 1 0 0 4.75z' />
    </g>
    <defs>
      <clipPath id='2d4195925cbf42b3ddb7995857208934__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightMdBoldIcon);
export default ForwardRef;

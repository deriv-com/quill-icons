import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenMdBoldIcon = (
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
      <path d='M0 5.75Q.063 5.063.75 5h8.5q.438 0 .656.375.188.375 0 .75l-7.5 12.5q-.405.563-1.031.281-.562-.405-.25-1.031L7.938 6.5H.75Q.063 6.437 0 5.75' />
    </g>
    <defs>
      <clipPath id='074c3a1c2d69b5fa7c011166fe44c56d__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenMdBoldIcon);
export default ForwardRef;

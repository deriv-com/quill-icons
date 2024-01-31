import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketMdBoldIcon = (
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
      <path d='M6 15.438 9.438 12 6 8.563v1.687q-.063.687-.75.75H1.5v2h3.75q.687.063.75.75zM11 12q0 .563-.406.969l-3.625 3.594Q6.563 17 5.937 17a1.31 1.31 0 0 1-1-.437 1.48 1.48 0 0 1-.437-1V14.5h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 13v-2q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 9.5h3V8.438q.03-.595.438-1Q5.344 7 5.938 7t1.03.438l3.626 3.593Q11 11.438 11 12m-.25 5.5h2.5q.531 0 .875-.375.375-.344.375-.875v-8.5q0-.531-.375-.875-.344-.375-.875-.375h-2.5q-.687-.063-.75-.75.063-.687.75-.75h2.5q1.156.03 1.938.813.78.78.812 1.937v8.5q-.031 1.156-.812 1.938-.781.78-1.938.812h-2.5q-.687-.063-.75-.75.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='90aac793c1089e32__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.531 4.219 4 4q.438.531 0 1.062-.531.438-1.062 0L7.75 6.562v7.688q-.063.687-.75.75-.687-.063-.75-.75V6.563L3.531 9.28q-.531.438-1.062 0-.438-.531 0-1.062l4-4q.531-.438 1.062 0M1.5 14.75v2.5q0 .531.375.875.344.375.875.375h8.5q.531 0 .875-.375.375-.344.375-.875v-2.5q.063-.687.75-.75.687.063.75.75v2.5q-.031 1.156-.812 1.938-.781.78-1.938.812h-8.5q-1.156-.031-1.937-.812Q.03 18.406 0 17.25v-2.5q.063-.687.75-.75.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='623b779b978719e04fefafb3f8b71fc5__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketMdBoldIcon);
export default ForwardRef;

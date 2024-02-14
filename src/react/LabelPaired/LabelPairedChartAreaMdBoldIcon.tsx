import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaMdBoldIcon = (
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
      <path d='M1.5 5.75v11q.063.687.75.75h13q.687.063.75.75-.063.687-.75.75h-13q-.969-.031-1.594-.656Q.032 17.719 0 16.75v-11Q.063 5.063.75 5q.687.063.75.75m7.438 5.313L7 9.125l-2.5 2.5V14.5h9v-2.437l-1.594-1.844-.844.844A1.45 1.45 0 0 1 10 11.5q-.625 0-1.062-.437M10 10l1.063-1.062.187-.188q.312-.28.719-.281.437.03.719.344l1.937 2.28q.375.408.375.97V15a.97.97 0 0 1-.281.719A.97.97 0 0 1 14 16H4a.97.97 0 0 1-.719-.281A.97.97 0 0 1 3 15v-3.375q0-.625.438-1.062L6.28 7.719A.99.99 0 0 1 7 7.406q.405 0 .719.313l1.218 1.218z' />
    </g>
    <defs>
      <clipPath id='ccdea4f1b1660cc6013af2425f6632ec__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaMdBoldIcon);
export default ForwardRef;

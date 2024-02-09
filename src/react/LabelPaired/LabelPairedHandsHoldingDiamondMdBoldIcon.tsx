import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.281 4.281Q9.594 4.001 10 4q.405 0 .719.281l3 3q.28.313.281.719 0 .405-.281.719l-3 3A1.04 1.04 0 0 1 10 12q-.405 0-.719-.281l-3-3A1.04 1.04 0 0 1 6 8q0-.405.281-.719zM2.25 6q.969.031 1.594.656.624.625.656 1.594v4.031q.594-.5 1.406-.531.906 0 1.532.625l1.937 1.938q.345.344.625.78.282-.436.656-.78l1.906-1.938a2.08 2.08 0 0 1 1.532-.625q.812.03 1.406.531V8.25q.031-.969.656-1.594A2.35 2.35 0 0 1 17.75 6q.969.031 1.594.656.624.625.656 1.594V15q0 1.563-1.094 2.656l-2.125 2.125q-.531.438-1.062 0-.438-.531 0-1.062l2.125-2.125A2.17 2.17 0 0 0 18.5 15V8.25q-.063-.687-.75-.75-.687.063-.75.75v4.563q0 1.25-.875 2.124l-.5.5-.844.844-.5.5q-.531.438-1.062 0-.438-.531 0-1.062l.5-.5.844-.844a.64.64 0 0 0 .187-.469q-.062-.594-.656-.656a.64.64 0 0 0-.469.188l-1.937 1.937q-.907.937-.938 2.281v1.594q-.063.687-.75.75-.687-.063-.75-.75v-1.594q-.03-1.344-.937-2.281l-1.938-1.937a.64.64 0 0 0-.469-.188q-.593.063-.656.656 0 .282.188.469l.843.844.5.5q.438.531 0 1.062-.531.438-1.062 0l-.5-.5-.844-.843-.469-.5A3 3 0 0 1 3 12.812V8.25q-.063-.687-.75-.75-.687.063-.75.75V15q0 .937.656 1.594l2.125 2.125q.438.531 0 1.062-.531.438-1.062 0l-2.125-2.125Q.03 16.563 0 15V8.25q.031-.969.656-1.594Q1.281 6.032 2.25 6' />
    </g>
    <defs>
      <clipPath id='d701c7f9da170beef0255932b1c14ad4__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondMdBoldIcon);
export default ForwardRef;

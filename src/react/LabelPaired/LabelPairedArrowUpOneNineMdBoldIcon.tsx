import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineMdBoldIcon = (
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
      <path d='M14.25 5.75V9.5H15q.687.063.75.75-.063.687-.75.75h-3q-.687-.063-.75-.75.063-.687.75-.75h.75V6.781l-.5.188q-.687.156-.969-.469-.156-.687.469-.969l1.5-.5q.375-.093.688.125a.69.69 0 0 1 .312.594m-9.781-.531q.531-.438 1.062 0l3 3q.438.531 0 1.062-.531.438-1.062 0L5.75 7.562V18.25q-.063.687-.75.75-.687-.063-.75-.75V7.563L2.531 9.28q-.531.438-1.062 0-.438-.531 0-1.062zM13.25 13.5q-.72.031-1.094.625a1.33 1.33 0 0 0 0 1.25q.375.594 1.094.625.72-.031 1.094-.625a1.33 1.33 0 0 0 0-1.25q-.375-.594-1.094-.625m-.562 3.938q-.969-.22-1.563-.938-.594-.719-.625-1.75.03-1.156.813-1.937.78-.781 1.937-.813 1.156.03 1.938.813.78.78.812 1.937 0 1.032-.656 1.813l-1.75 2.156q-.5.5-1.063.125-.5-.5-.125-1.063z' />
    </g>
    <defs>
      <clipPath id='441665b4a6b5563b05708005b9c9da3c__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineMdBoldIcon);
export default ForwardRef;

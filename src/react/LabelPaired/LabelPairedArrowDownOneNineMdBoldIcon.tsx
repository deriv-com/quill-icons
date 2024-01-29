import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineMdBoldIcon = (
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
      <path d='M14.25 5.75V9.5H15q.687.063.75.75-.063.687-.75.75h-3q-.687-.063-.75-.75.063-.687.75-.75h.75V6.781l-.5.188q-.687.156-.969-.469-.156-.687.469-.969l1.5-.5q.375-.093.688.125a.69.69 0 0 1 .312.594M4.469 18.781l-3-3q-.438-.531 0-1.062.531-.438 1.062 0l1.719 1.719V5.75Q4.313 5.063 5 5q.687.063.75.75v10.688l1.719-1.72q.531-.435 1.062 0 .438.533 0 1.063l-3 3q-.531.438-1.062 0M13.25 16q.72-.031 1.094-.625a1.33 1.33 0 0 0 0-1.25q-.375-.594-1.094-.625-.72.031-1.094.625a1.33 1.33 0 0 0 0 1.25q.375.594 1.094.625m-.562 1.438q-.969-.22-1.563-.938-.594-.719-.625-1.75.03-1.156.813-1.937.78-.781 1.937-.813 1.156.03 1.938.813.78.78.812 1.937 0 1.032-.656 1.813l-1.75 2.156q-.5.5-1.063.125-.5-.5-.125-1.063z' />
    </g>
    <defs>
      <clipPath id='4812f5da0231ed6595c36e84764a6308__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineMdBoldIcon);
export default ForwardRef;

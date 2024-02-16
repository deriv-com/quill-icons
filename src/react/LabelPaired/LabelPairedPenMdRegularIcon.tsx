import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenMdRegularIcon = (
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
      <path d='m12.375 5.25-1.719 1.688 2.406 2.406 1.688-1.719q.438-.531 0-1.062L13.438 5.25q-.532-.438-1.063 0M9.938 7.656 2.593 15q-.344.375-.5.875L1.25 18.75l2.875-.844q.5-.155.875-.5l7.344-7.343zm4.187-3.125 1.344 1.344q.5.53.5 1.219 0 .719-.5 1.25l-9.781 9.75q-.532.562-1.25.781L.656 19.969q-.312.093-.5-.125-.218-.188-.125-.469l1.094-3.781q.219-.75.75-1.281l9.781-9.782q.531-.5 1.25-.5.688 0 1.219.5' />
    </g>
    <defs>
      <clipPath id='f15740de9b88604af24152f1a8232f04__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenMdRegularIcon);
export default ForwardRef;

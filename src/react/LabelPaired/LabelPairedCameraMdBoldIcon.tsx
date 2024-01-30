import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraMdBoldIcon = (
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
      <path d='M6.219 5H9.78q.563 0 1.031.344.438.313.626.843l.28.813H14q.844.03 1.406.594Q15.97 8.156 16 9v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V9q.03-.843.594-1.406Q1.157 7.032 2 7h2.281l.282-.812.718.25-.718-.25q.187-.532.625-.844Q5.656 5 6.218 5M6 6.688 5.563 8q-.219.47-.72.5H2q-.469.031-.5.5v8q.031.47.5.5h12q.47-.03.5-.5V9q-.03-.469-.5-.5h-2.844q-.5-.03-.687-.5l-.438-1.312q-.093-.188-.25-.188H6.22q-.156 0-.219.188M8 16.5a3.44 3.44 0 0 1-1.75-.469 3.44 3.44 0 0 1-1.281-1.281A3.44 3.44 0 0 1 4.5 13q0-.937.469-1.75T6.25 9.969A3.44 3.44 0 0 1 8 9.5q.937 0 1.75.469t1.281 1.281q.47.813.469 1.75 0 .937-.469 1.75T9.75 16.031A3.44 3.44 0 0 1 8 16.5M6 13q.03 1.125 1 1.719 1 .562 2 0 .97-.594 1-1.719-.03-1.125-1-1.719-1-.562-2 0-.97.594-1 1.719' />
    </g>
    <defs>
      <clipPath id='6bc5d62cca194aa4b9346409cbc8c967__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 7.375q-.585.039-.625.625v10h9.375v2.5H1.875a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 0 18.625Q.039 18.04.625 18H2.5V8q.039-1.055.742-1.758T5 5.5h12.5q1.055.039 1.758.742T20 8v1.25h-1.875V8q-.039-.585-.625-.625zm10 5q.039-.78.547-1.328.546-.508 1.328-.547h6.25q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-6.25a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 15 23.625zm1.875 0v11.25h6.25v-11.25z' />
    </g>
    <defs>
      <clipPath id='df2efa8c6bfe2fade4f4a0793e73a092__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileLgBoldIcon);
export default ForwardRef;

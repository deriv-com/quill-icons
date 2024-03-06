import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.625 24.25Q.04 24.211 0 23.625.039 23.04.625 23h13.75q.585.039.625.625-.039.585-.625.625zm7.305-3.945q-.43.39-.86 0l-5-5q-.39-.43 0-.86.43-.39.86 0l3.945 3.907V7.375q.039-.585.625-.625.585.039.625.625v10.977l3.945-3.907q.43-.39.86 0 .39.43 0 .86z' />
    </g>
    <defs>
      <clipPath id='a1634b8081d9df33bf43b161c66ae157__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.43 5.695 5 5q.39.43 0 .86-.43.39-.86 0L9.625 7.648v10.977q-.039.585-.625.625-.585-.039-.625-.625V7.648L4.43 11.555q-.43.39-.86 0-.39-.43 0-.86l5-5q.43-.39.86 0M1.5 18.625v3.75q.039.78.547 1.328.546.508 1.328.547h11.25q.78-.039 1.328-.547.508-.546.547-1.328v-3.75q.039-.585.625-.625.585.039.625.625v3.75q-.04 1.328-.898 2.227-.9.858-2.227.898H3.375q-1.328-.04-2.227-.898-.858-.9-.898-2.227v-3.75Q.289 18.04.875 18q.586.039.625.625' />
    </g>
    <defs>
      <clipPath id='595de6f5054896674f687ce820ba61b6__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketLgRegularIcon);
export default ForwardRef;

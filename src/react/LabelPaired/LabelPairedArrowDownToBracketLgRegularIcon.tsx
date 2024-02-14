import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketLgRegularIcon = (
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
      <path d='m14.43 14.055-5 5q-.43.39-.86 0l-5-5q-.39-.43 0-.86.43-.39.86 0l3.945 3.907V6.125Q8.414 5.54 9 5.5q.585.039.625.625v10.977l3.945-3.907q.43-.39.86 0 .39.43 0 .86M1.5 18.625v3.75q.039.78.547 1.328.546.508 1.328.547h11.25q.78-.039 1.328-.547.508-.546.547-1.328v-3.75q.039-.585.625-.625.585.039.625.625v3.75q-.04 1.328-.898 2.227-.9.858-2.227.898H3.375q-1.328-.04-2.227-.898-.858-.9-.898-2.227v-3.75Q.289 18.04.875 18q.586.039.625.625' />
    </g>
    <defs>
      <clipPath id='2ae6b928a6754c7e1e3f6d3cfb700481__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketLgRegularIcon);
export default ForwardRef;

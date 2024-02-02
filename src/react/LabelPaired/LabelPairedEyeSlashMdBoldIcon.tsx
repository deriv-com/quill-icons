import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashMdBoldIcon = (
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
      <path d='m1.219 4.156 3.5 2.75a9 9 0 0 1 2.343-1.375Q8.407 5.031 10 5q1.906.03 3.406.75t2.625 1.781q1.095 1.032 1.813 2.125.718 1.095 1.093 1.969.126.375 0 .75-.344.78-.968 1.75a13 13 0 0 1-1.532 1.969l3.282 2.562q.5.47.125 1.063-.47.5-1.063.125l-18.5-14.5q-.5-.47-.125-1.063.47-.5 1.063-.125m4.719 3.688 1.437 1.125Q8.469 8.032 10 8q1.688.03 2.844 1.156Q13.969 10.312 14 12q0 1-.437 1.844l1.687 1.312q.78-.812 1.344-1.656.562-.843.875-1.5-.344-.719-.938-1.625A10.7 10.7 0 0 0 15 8.625a7.7 7.7 0 0 0-2.219-1.5Q11.531 6.531 10 6.5q-2.375.063-4.062 1.344m6.406 5.031q.156-.405.156-.875-.03-1.062-.719-1.781Q11.062 9.53 10 9.5h-.062q.062.25.062.5 0 .469-.219.875zm.281 4.094L13.938 18q-1.688.937-3.938 1-1.905-.03-3.406-.75A9.7 9.7 0 0 1 4 16.469q-1.125-1.032-1.844-2.125-.718-1.095-1.062-1.969a.94.94 0 0 1 0-.75q.436-1.125 1.5-2.562l1.187.906Q2.938 11.094 2.531 12q.345.719.938 1.625.624.906 1.531 1.75a7.7 7.7 0 0 0 2.219 1.5q1.25.594 2.781.625 1.437-.03 2.625-.531M6 12v-.25l1.75 1.375q.531 1.031 1.688 1.313l1.75 1.374A3.7 3.7 0 0 1 10 16q-1.687-.03-2.844-1.156Q6.031 13.687 6 12' />
    </g>
    <defs>
      <clipPath id='d1656315dacf7d08__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashMdBoldIcon);
export default ForwardRef;

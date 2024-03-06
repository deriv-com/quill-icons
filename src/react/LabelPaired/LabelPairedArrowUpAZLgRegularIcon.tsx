import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.93 6.945 3.75 3.75q.39.43 0 .86-.43.39-.86 0L7.125 8.898v14.727q-.039.585-.625.625-.585-.039-.625-.625V8.898L3.18 11.555q-.43.39-.86 0-.39-.43 0-.86l3.75-3.75q.43-.39.86 0M14 16.75h5q.39 0 .547.352a.67.67 0 0 1-.04.664L15.29 23H19q.585.039.625.625-.039.585-.625.625h-5a.55.55 0 0 1-.547-.352.62.62 0 0 1 .078-.664L17.711 18H14q-.585-.039-.625-.625.039-.585.625-.625m2.5-10q.39 0 .547.352l2.5 5h.039l.586 1.25q.234.547-.274.82-.507.234-.82-.274L18.61 13h-4.218l-.47.898q-.272.508-.82.274-.508-.274-.273-.82l.625-1.25 2.5-5a.55.55 0 0 1 .547-.352m-1.484 5h2.968L16.5 8.781z' />
    </g>
    <defs>
      <clipPath id='9a178f0899cb94fd73ca18bcd408d5d5__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineLgRegularIcon = (
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
      <path d='M17.75 7.375V13H19q.585.039.625.625-.039.585-.625.625h-3.75q-.585-.039-.625-.625.039-.585.625-.625h1.25V8.234l-1.055.352q-.547.117-.78-.39-.12-.548.39-.782l1.875-.625q.312-.117.547.078.273.196.273.508m-10.82-.43 3.75 3.75q.39.43 0 .86-.43.39-.86 0L7.125 8.898v14.727q-.039.585-.625.625-.585-.039-.625-.625V8.898L3.18 11.555q-.43.39-.86 0-.39-.43 0-.86l3.75-3.75q.43-.39.86 0m10.039 13.868q1.132-.04 1.758-1.016.546-1.015 0-2.031-.626-.977-1.758-1.016-1.133.04-1.758 1.016-.548 1.016 0 2.03.625.977 1.758 1.017m-3.282-2.032q.04-1.405.977-2.304.898-.938 2.305-.977 1.406.04 2.304.977.938.899.977 2.304v.157q0 1.288-.82 2.265l-2.461 2.852q-.39.39-.86.039-.429-.39-.078-.86l.977-1.172h-.04q-1.406-.039-2.304-.976-.937-.898-.976-2.305' />
    </g>
    <defs>
      <clipPath id='e32290c24c5a877bb4715a91fa215489__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineLgRegularIcon = (
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
      <path d='M17.75 7.375V13H19q.585.039.625.625-.039.585-.625.625h-3.75q-.585-.039-.625-.625.039-.585.625-.625h1.25V8.234l-1.055.352q-.547.156-.78-.39-.12-.548.39-.782l1.875-.625a.66.66 0 0 1 .547.078q.273.196.273.508M6.93 24.055q-.43.39-.86 0l-3.75-3.75q-.39-.43 0-.86.43-.39.86 0l2.695 2.657V7.375q.039-.585.625-.625.585.039.625.625v14.727l2.695-2.657q.43-.39.86 0 .39.43 0 .86zm10.039-7.305q-1.133.04-1.758 1.016-.548 1.016 0 2.03.625.977 1.758 1.017 1.132-.04 1.758-1.016.546-1.015 0-2.031-.626-.977-1.758-1.016m-3.282 2.031q.04-1.405.977-2.304.898-.938 2.305-.977 1.406.04 2.304.977.938.899.977 2.304v.157q0 1.288-.82 2.265l-2.461 2.813q-.43.429-.86.078-.429-.43-.078-.86l.977-1.172h-.04q-1.406-.039-2.304-.976-.937-.898-.976-2.305' />
    </g>
    <defs>
      <clipPath id='fa425ae6c740cafe620bf0c9106dd9ef__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineLgRegularIcon);
export default ForwardRef;

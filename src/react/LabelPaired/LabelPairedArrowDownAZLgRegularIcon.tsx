import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZLgRegularIcon = (
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
      <path d='m10.68 20.305-3.75 3.75q-.43.39-.86 0l-3.75-3.75q-.39-.43 0-.86.43-.39.86 0l2.695 2.657V7.375q.039-.585.625-.625.585.039.625.625v14.727l2.695-2.657q.43-.39.86 0 .39.43 0 .86m6.367-13.203 2.5 4.96v.04l.625 1.25q.234.507-.274.82-.547.234-.82-.274L18.61 13h-4.218l-.47.898q-.31.508-.82.274-.508-.274-.273-.82l.586-1.25h.04l2.5-5a.55.55 0 0 1 .546-.352q.39 0 .547.352m-.547 1.68-1.484 2.968h2.968zM14 16.75h5q.39 0 .547.352a.67.67 0 0 1-.04.664L15.29 23H19q.585.039.625.625-.039.585-.625.625h-5a.55.55 0 0 1-.547-.352.62.62 0 0 1 .078-.664L17.711 18H14q-.585-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='0d8fd3707b34e0ce34e6b794a62796f4__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZLgRegularIcon);
export default ForwardRef;

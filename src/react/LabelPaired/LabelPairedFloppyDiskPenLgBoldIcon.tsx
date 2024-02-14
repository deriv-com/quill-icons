import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenLgBoldIcon = (
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
      <path d='M2.125 9.25v12.5q.039.585.625.625h8.086l-.469 1.875H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75V9.25q.039-1.055.742-1.758T2.75 6.75h9.61q1.015 0 1.757.742l2.89 2.89-1.327 1.329-2.89-2.89-.04-.04v3.906q-.079.86-.937.938h-7.5q-.86-.079-.938-.937V8.625H2.75q-.586.039-.625.625m14.883 1.133q.742.742.742 1.797v2.539l-1.875 1.875V12.18a.64.64 0 0 0-.195-.47zM5.25 8.625v3.125h5.625V8.625zM6.5 18q.04-1.406 1.25-2.148 1.25-.705 2.5 0 1.21.741 1.25 2.148-.04 1.407-1.25 2.148-1.25.705-2.5 0Q6.54 19.407 6.5 18m15.234-3.281.547.547q.47.508.469 1.093 0 .626-.469 1.133l-1.133 1.133-2.773-2.773 1.133-1.133q.507-.47 1.094-.469.625 0 1.132.469m-9.297 7.07 5.04-5.039 2.773 2.773-5.04 5.04a1.5 1.5 0 0 1-.585.351l-2.344.586a.68.68 0 0 1-.586-.195.68.68 0 0 1-.195-.586l.586-2.344a1.5 1.5 0 0 1 .351-.586' />
    </g>
    <defs>
      <clipPath id='262d6f3fe1b418163516516c40367d38__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenLgBoldIcon);
export default ForwardRef;

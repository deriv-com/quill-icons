import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.5 8h-15q-.547 0-.898.352-.352.35-.352.898v2.5h17.5v-2.5q0-.547-.352-.898Q18.048 8 17.5 8M1.25 21.75q0 .547.352.898.35.352.898.352h3.75V13h-5zM7.5 23h10q.547 0 .898-.352.352-.35.352-.898V13H7.5zm-5-16.25h15q1.055.039 1.758.742T20 9.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75V9.25q.039-1.055.742-1.758T2.5 6.75' />
    </g>
    <defs>
      <clipPath id='eff4e63ba42e292c072277c63bb14457__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutLgRegularIcon);
export default ForwardRef;

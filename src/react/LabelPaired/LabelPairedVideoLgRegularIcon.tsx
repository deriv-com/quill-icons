import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoLgRegularIcon = (
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
      <path d='M2.75 9.25q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352h10q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352zM.25 10.5q.039-1.055.742-1.758T2.75 8h10q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758T12.75 23h-10q-1.055-.039-1.758-.742Q.29 21.554.25 20.5zm20.273 11.055L16.5 19.328v-1.406l4.648 2.539q.04.039.118.039.195 0 .234-.234v-9.532a.28.28 0 0 0-.234-.234q-.078 0-.118.04L16.5 13.077v-1.406l4.023-2.227q.352-.195.743-.195.624 0 1.054.43t.43 1.054v9.532q0 .624-.43 1.054t-1.054.43q-.39 0-.743-.195' />
    </g>
    <defs>
      <clipPath id='25edfd93f9a495e1ac217d53a69069bd__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoLgBoldIcon = (
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
      <path d='M2.75 9.875q-.586.039-.625.625v10q.039.585.625.625h10q.585-.039.625-.625v-10q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T2.75 8h10q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758T12.75 23h-10q-1.055-.039-1.758-.742Q.29 21.554.25 20.5zm20.625 9.18v-8.36L16.5 13.273v-2.07l4.063-1.797q.313-.156.664-.156.625 0 1.054.469.47.428.469 1.094v9.414q0 .625-.469 1.054a1.38 1.38 0 0 1-1.054.469q-.352 0-.665-.117L16.5 19.797v-2.07z' />
    </g>
    <defs>
      <clipPath id='75481765ebe458762a58a89a068f65be__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoLgBoldIcon);
export default ForwardRef;

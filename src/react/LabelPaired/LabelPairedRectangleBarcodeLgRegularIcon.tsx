import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeLgRegularIcon = (
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
      <path d='M2.75 8q-.547 0-.898.352-.352.35-.352.898v12.5q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898V9.25q0-.547-.352-.898Q20.798 8 20.25 8zM.25 9.25q.039-1.055.742-1.758T2.75 6.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zM4 11.125q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625zm11.25 0q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625zm3.125-.625q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-8.75q.039-.585.625-.625M6.5 11.125q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625zm3.125-.625q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-8.75q.039-.585.625-.625m2.5.625q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625z' />
    </g>
    <defs>
      <clipPath id='a3d05232a2607bbdd6f21ebb6e9bebf1__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeLgRegularIcon);
export default ForwardRef;

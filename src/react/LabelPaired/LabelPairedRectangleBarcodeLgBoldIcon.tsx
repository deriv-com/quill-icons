import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeLgBoldIcon = (
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
      <path d='M2.75 8.625q-.586.039-.625.625v12.5q.039.585.625.625h17.5q.585-.039.625-.625V9.25q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T2.75 6.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zm4.688 1.25q.859.078.937.938v8.124q-.078.86-.937.938-.86-.078-.938-.937v-8.125q.078-.86.938-.938m2.812 0q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-8.75q.039-.585.625-.625m1.875.938q.078-.86.938-.938.858.078.937.938v8.124q-.079.86-.937.938-.86-.078-.938-.937zm5.313-.938q.858.078.937.938v8.124q-.079.86-.937.938-.86-.078-.938-.937v-8.125q.078-.86.938-.938m2.812.625q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625z' />
    </g>
    <defs>
      <clipPath id='56655e745493c13d41c1441cbc9b3bad__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeLgBoldIcon);
export default ForwardRef;

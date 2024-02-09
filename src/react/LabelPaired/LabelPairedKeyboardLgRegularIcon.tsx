import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardLgRegularIcon = (
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
      <path d='M2.75 9.25q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352h17.5q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352zM.25 10.5q.039-1.055.742-1.758T2.75 8h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 21.554.25 20.5zm3.438.313h.624q.587.038.625.624v.626q-.039.585-.625.624h-.625q-.585-.038-.624-.624v-.626q.039-.585.624-.624m-.626 4.374q.04-.585.626-.624h.624q.587.038.625.624v.626q-.039.585-.625.624h-.625q-.585-.039-.624-.625zm.626 3.126h.624q.587.039.625.625v.625q-.039.585-.625.625h-.625q-.585-.04-.624-.625v-.625q.039-.587.624-.625m3.125-6.875q.039-.587.625-.626h.625q.585.04.624.626v.624q-.039.587-.624.626h-.626q-.585-.04-.625-.626zm.625 3.124h.625q.585.04.624.626v.624q-.039.587-.624.626h-.626q-.585-.04-.625-.625v-.626q.04-.585.625-.624m3.125-3.124q.038-.587.624-.626h.626q.585.04.624.626v.624q-.038.587-.624.626h-.626q-.585-.04-.624-.626zm.624 3.124h.626q.585.04.624.626v.624q-.038.587-.624.626h-.626q-.585-.04-.624-.625v-.626q.038-.585.624-.624m3.126-3.124q.038-.587.624-.626h.626q.585.04.624.626v.624q-.039.587-.625.626h-.624q-.587-.04-.626-.626zm.624 3.124h.626q.585.04.624.626v.624q-.039.587-.625.626h-.624q-.587-.04-.626-.625v-.626q.04-.585.626-.624m3.126-3.124q.039-.587.625-.626h.625q.585.04.625.626v.624q-.04.587-.625.626h-.625q-.587-.04-.625-.626zm.625 3.124h.625q.585.04.625.626v.624q-.04.587-.625.626h-.625q-.587-.04-.625-.625v-.626q.039-.585.625-.624m-.625 4.376q.039-.587.625-.625h.625q.585.039.625.625v.625q-.04.585-.625.625h-.625q-.587-.04-.625-.625zm-10.938-.313h8.75q.585.039.625.625-.039.585-.625.625h-8.75q-.585-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='7bf69303cda8486a30b083d8330a1731__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoLgBoldIcon = (
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
      <path d='M2.75 23.625h8.633a6.6 6.6 0 0 0 1.758 1.836q-.195.039-.391.039h-10q-1.055-.039-1.758-.742Q.29 24.054.25 23V8q.039-1.055.742-1.758T2.75 5.5h6.484q1.015 0 1.758.742l3.516 3.516q.742.742.742 1.797v1.718a6.7 6.7 0 0 0-1.875.82V11.75H10.25q-.547 0-.898-.352Q9 11.048 9 10.5V7.375H2.75q-.586.039-.625.625v15q.039.585.625.625m14.375-9.375q1.523 0 2.813.742a5.64 5.64 0 0 1 2.07 2.07 5.7 5.7 0 0 1 .742 2.813 5.7 5.7 0 0 1-.742 2.813 5.64 5.64 0 0 1-2.07 2.07 5.54 5.54 0 0 1-2.813.742 5.54 5.54 0 0 1-2.812-.742 5.64 5.64 0 0 1-2.07-2.07 5.7 5.7 0 0 1-.743-2.813q0-1.485.742-2.812a5.64 5.64 0 0 1 2.07-2.07 5.54 5.54 0 0 1 2.813-.743m0 3.75q.859-.078.938-.937-.079-.86-.938-.938-.86.078-.937.938.078.858.937.937m-1.25 1.875q.039.585.625.625v1.875q-.585.039-.625.625.039.585.625.625h1.25q.585-.039.625-.625-.039-.585-.625-.625v-2.5q-.039-.585-.625-.625H16.5q-.585.039-.625.625' />
    </g>
    <defs>
      <clipPath id='025f3d1a677c662ab1c4b93185ddea14__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoLgBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6.125v1.68L5.328 6.75q2.5-.625 4.805.469a5.2 5.2 0 0 0 2.578.586 5.6 5.6 0 0 0 2.578-.703l.586-.352q.665-.351 1.25 0 .585.312.625 1.055v11.054q-.039.782-.742 1.133l-1.211.508a7.3 7.3 0 0 1-3.047.586 6.9 6.9 0 0 1-3.008-.781q-2.07-.977-4.258-.43L1.5 20.969v3.906q-.039.585-.625.625-.585-.039-.625-.625V6.125Q.289 5.54.875 5.5q.586.039.625.625m0 2.969v2.422l3.75-.782V8.078zm0 3.71v2.774l3.75-.781v-2.813zm5-1.093v2.773a5.75 5.75 0 0 1 2.656.157l2.344.664V12.57a2 2 0 0 0-.195-.078l-2.5-.703a4.3 4.3 0 0 0-2.149-.078zm6.25 1.055v2.812a5.7 5.7 0 0 0 1.758-.117l1.992-.469V12.22l-1.68.39a7 7 0 0 1-2.07.157m-1.25 3.867a2 2 0 0 0-.195-.078l-2.5-.703a4.3 4.3 0 0 0-2.149-.079H6.5v2.696a7.1 7.1 0 0 1 3.79.742q.585.273 1.21.43zm1.25 3.203a5.9 5.9 0 0 0 2.578-.508l1.172-.469v-2.578l-1.68.39q-1.055.236-2.07.157zm0-8.32a5.7 5.7 0 0 0 1.758-.118l1.992-.468V7.844l-.625.312a6.46 6.46 0 0 1-3.125.899zm-1.25-2.54a6.6 6.6 0 0 1-1.953-.624A5.6 5.6 0 0 0 6.5 7.805v2.656a5.4 5.4 0 0 1 2.656.117l2.344.703zm-10 7.891v2.813l3.633-.977a.3.3 0 0 1 .117-.039v-2.617z' />
    </g>
    <defs>
      <clipPath id='79b627882999ea05e017bd488db2115e__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredLgRegularIcon);
export default ForwardRef;

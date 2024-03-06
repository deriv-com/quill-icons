import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageLgRegularIcon = (
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
      <path d='M2.5 8q-.547 0-.898.352-.352.35-.352.898v9.102l2.656-2.618A1.5 1.5 0 0 1 5 15.266a1.5 1.5 0 0 1 1.094.468l2.656 2.618 5.156-5.118A1.5 1.5 0 0 1 15 12.766a1.5 1.5 0 0 1 1.094.468l2.656 2.618V9.25q0-.547-.352-.898Q18.048 8 17.5 8zM1.25 20.148v1.602q0 .547.352.898.35.352.898.352h1.602l3.75-3.75-2.618-2.656a.39.39 0 0 0-.468 0zm13.984-6.054a.39.39 0 0 0-.468 0L5.898 23H17.5q.547 0 .898-.352.352-.35.352-.898v-4.102zM0 9.25q.039-1.055.742-1.758T2.5 6.75h15q1.055.039 1.758.742T20 9.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75zm6.25 1.875q-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625.585-.039.625-.625m-2.5 0q.04-1.055.938-1.64.938-.47 1.875 0 .897.585.937 1.64-.04 1.055-.937 1.64-.937.47-1.875 0-.9-.585-.938-1.64' />
    </g>
    <defs>
      <clipPath id='5109cff82b7f637ba0291a5f5fc30893__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageLgRegularIcon);
export default ForwardRef;

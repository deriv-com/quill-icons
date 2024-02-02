import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.563 7.688q.078.858.937.937.859-.078.938-.937-.079-.86-.938-.938-.86.078-.937.938m3.125 0q-.04 1.25-1.094 1.875-1.095.624-2.188 0-1.054-.625-1.093-1.876.039-1.25 1.093-1.875 1.095-.624 2.188 0 1.054.625 1.094 1.875M6.992 11.75q-.39 0-.742.156V18h2.5v-6.25zM6.25 24.875q-.039.585-.625.625-.585-.039-.625-.625V13.391l-1.953 3.672q-.313.468-.82.234-.508-.313-.274-.82l2.305-4.336q.898-1.563 2.734-1.641H12.5V7.375q.039-.781.547-1.328.546-.508 1.328-.547h8.75q.78.039 1.328.547.508.546.547 1.328v8.75q-.039.78-.547 1.328-.546.508-1.328.547h-8.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V13h1.25v3.125q.039.585.625.625h8.75q.585-.039.625-.625v-8.75q-.039-.585-.625-.625h-8.75q-.585.039-.625.625V10.5h1.875q.585.039.625.625-.039.585-.625.625H10v13.125q-.039.585-.625.625-.585-.039-.625-.625V19.25h-2.5z' />
    </g>
    <defs>
      <clipPath id='e404ffb51433547a1651377b40b9500a__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardLgRegularIcon);
export default ForwardRef;

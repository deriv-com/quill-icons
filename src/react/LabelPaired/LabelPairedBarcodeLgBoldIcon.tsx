import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeLgBoldIcon = (
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
      <path d='M.938 6.75q.859.078.937.938v15.625q-.079.858-.937.937-.86-.079-.938-.937V7.688q.078-.86.938-.938m3.437 0q.585.039.625.625v16.25q-.039.585-.625.625-.586-.039-.625-.625V7.375q.039-.585.625-.625m2.813 0q.859.078.937.938v15.625q-.078.858-.937.937-.86-.079-.938-.937V7.688q.078-.86.938-.938m4.375 0q.858.078.937.938v15.625q-.079.858-.937.937-.86-.079-.938-.937V7.688q.078-.86.938-.938m6.562.938q.078-.86.938-.938.858.078.937.938v15.625q-.078.858-.937.937-.86-.079-.938-.937zm-2.5-.313q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625z' />
    </g>
    <defs>
      <clipPath id='f35a226054dbead7dd5cb3dab1f1050e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgBoldIcon);
export default ForwardRef;

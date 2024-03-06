import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.938 7.688v14.687h3.125q.858.078.937.938-.079.858-.937.937H.938q-.86-.079-.938-.937.078-.86.938-.938h3.125V9.367L1.406 10.97q-.742.39-1.289-.274-.351-.78.313-1.289l4.062-2.5q.469-.273.977-.039a.89.89 0 0 1 .468.82' />
    </g>
    <defs>
      <clipPath id='7ed1304b6eb53d576a000573064ef347__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneLgBoldIcon);
export default ForwardRef;

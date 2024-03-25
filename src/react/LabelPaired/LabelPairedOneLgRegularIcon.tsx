import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneLgRegularIcon = (
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
      <path d='M5.625 7.375V23h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 23.625C0 23.313.273 23 .625 23h3.75V8.547l-2.812 1.875c-.274.195-.665.117-.86-.195-.195-.274-.117-.665.195-.86l3.75-2.5a.7.7 0 0 1 .625-.039c.196.117.352.352.352.547' />
    </g>
    <defs>
      <clipPath id='8fe1913efe79aff10cbb3a894244c3b8__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneLgRegularIcon);
export default ForwardRef;

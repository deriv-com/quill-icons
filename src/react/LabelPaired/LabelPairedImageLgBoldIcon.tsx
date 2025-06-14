import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageLgBoldIcon = (
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
      <path d='M17.5 8.625h-15a.64.64 0 0 0-.625.625v12.54l.156-.235 3.125-4.375c.196-.274.469-.43.782-.43.273 0 .585.156.742.39l1.21 1.68 3.243-4.18a.89.89 0 0 1 .742-.39c.273 0 .547.156.742.39l5.313 6.876.195.234V9.25c0-.312-.312-.625-.625-.625M2.5 6.75h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5m3.125 7.5a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.876.35-.546.937-.937 1.64-.937.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938' />
    </g>
    <defs>
      <clipPath id='f770386c452c23a5facc8de6d3f3e296__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageLgBoldIcon);
export default ForwardRef;

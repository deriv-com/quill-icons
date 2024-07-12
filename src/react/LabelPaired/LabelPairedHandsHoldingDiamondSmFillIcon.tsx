import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.371 4.023a.843.843 0 0 1 1.23 0l2.626 2.625a.843.843 0 0 1 0 1.23l-2.625 2.626a.843.843 0 0 1-1.23 0L5.745 7.879a.843.843 0 0 1 0-1.23zm-5.933 2.57v4.403c0 .465.164.902.492 1.23l1.394 1.395c.246.219.602.274.848.082.355-.219.41-.738.11-1.039l-.41-.41-.876-.875a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l.876.874.41.41.71.684c.575.574.903 1.367.903 2.188v2.133c0 .738-.602 1.312-1.312 1.312H4.98c-.464 0-.902-.164-1.23-.492l-2.734-2.735a2.65 2.65 0 0 1-.766-1.859v-6.07A1.08 1.08 0 0 1 1.344 5.5c.601 0 1.094.492 1.094 1.094m13.125 0c0-.6.492-1.093 1.093-1.093.602 0 1.094.492 1.094 1.094v6.071c0 .683-.273 1.366-.766 1.858l-2.734 2.735c-.328.328-.793.492-1.258.492h-1.805a1.296 1.296 0 0 1-1.312-1.312v-2.133c0-.82.3-1.614.875-2.188l.71-.683.411-.41.875-.876a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-.874.876-.41.41c-.301.3-.247.82.109 1.04.246.19.601.136.847-.083l1.395-1.394a1.74 1.74 0 0 0 .52-1.23V6.593' />
    </g>
    <defs>
      <clipPath id='6cfb76c1e1161ff96083f829966ff4e1__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondSmFillIcon);
export default ForwardRef;

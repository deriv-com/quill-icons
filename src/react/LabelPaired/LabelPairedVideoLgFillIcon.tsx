import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoLgFillIcon = (
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
      <path d='M.25 10.5C.25 9.133 1.344 8 2.75 8h10c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-10a2.47 2.47 0 0 1-2.5-2.5zm21.836-1.094c.39.235.664.664.664 1.094v10c0 .469-.273.898-.664 1.133-.43.195-.898.195-1.29-.078l-3.75-2.5-.546-.352v-6.367l.547-.352 3.75-2.5c.39-.273.86-.273 1.289-.078' />
    </g>
    <defs>
      <clipPath id='0f6cfb695212287f8998c2ae88722e61__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoLgFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopLgBoldIcon = (
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
      <path d='M20 8.625H5q-.585.039-.625.625V18H2.5V9.25q.039-1.055.742-1.758T5 6.75h15q1.055.039 1.758.742T22.5 9.25V18h-1.875V9.25q-.039-.585-.625-.625M3.75 22.375h17.5q1.29-.078 1.758-1.25H1.992q.47 1.172 1.758 1.25M0 20.5q0-.547.352-.898.35-.352.898-.352h22.5q.547 0 .898.352.352.35.352.898-.038 1.602-1.094 2.656-1.054 1.055-2.656 1.094H3.75q-1.602-.038-2.656-1.094Q.039 22.102 0 20.5' />
    </g>
    <defs>
      <clipPath id='360515faa03fff58ee728ef14c81f7e6__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopLgBoldIcon);
export default ForwardRef;

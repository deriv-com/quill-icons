import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 5a.97.97 0 0 0-.719.281A.97.97 0 0 0 3 6v7h8v1H1.063q.312.937 1.343 1H11v1H2.406q-1.031-.03-1.687-.687-.688-.688-.719-1.72.063-.53.594-.593H2V6q.03-.843.594-1.406Q3.157 4.032 4 4h10q.844.03 1.406.594Q15.97 5.156 16 6v1h-1V6a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 5zm9 4.5v9q.031.47.5.5h5q.47-.03.5-.5v-9q-.03-.469-.5-.5h-5q-.469.031-.5.5m-1 0q.03-.625.438-1.062A1.63 1.63 0 0 1 13.5 8h5q.625.03 1.063.438.405.436.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 20h-5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 12 18.5z' />
    </g>
    <defs>
      <clipPath id='213e07e0152e331af68b9116c9106419__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileMdRegularIcon);
export default ForwardRef;

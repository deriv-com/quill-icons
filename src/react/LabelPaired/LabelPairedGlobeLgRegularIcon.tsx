import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeLgRegularIcon = (
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
      <path d='M10 24.25q.507 0 1.133-.508.625-.507 1.289-1.719.586-1.17.937-2.773H6.641q.351 1.602.937 2.773.664 1.211 1.29 1.72.624.507 1.132.507M6.406 18h7.188a19 19 0 0 0 .156-2.5q0-1.328-.156-2.5H6.406a19 19 0 0 0-.156 2.5q0 1.328.156 2.5m.235-6.25h6.718q-.35-1.602-.937-2.773-.665-1.211-1.29-1.72Q10.509 6.75 10 6.75t-1.133.508q-.624.507-1.289 1.719-.585 1.17-.937 2.773M14.844 13Q15 14.21 15 15.5t-.156 2.5h3.554a9 9 0 0 0 .352-2.5 9 9 0 0 0-.352-2.5zm3.086-1.25a8.967 8.967 0 0 0-5.117-4.531q1.25 1.68 1.835 4.531zm-12.578 0q.585-2.851 1.875-4.531A8.9 8.9 0 0 0 4.18 8.977a8.3 8.3 0 0 0-2.07 2.773zM1.602 13a9 9 0 0 0-.352 2.5q0 1.29.352 2.5h3.554A20 20 0 0 1 5 15.5q0-1.29.156-2.5zm11.21 10.781a9 9 0 0 0 3.008-1.758 8.3 8.3 0 0 0 2.07-2.773h-3.242q-.585 2.852-1.835 4.531m-5.585 0q-1.29-1.68-1.875-4.531H2.109a8.3 8.3 0 0 0 2.07 2.773 8.9 8.9 0 0 0 3.048 1.758M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328' />
    </g>
    <defs>
      <clipPath id='9f534cc0b8b0e56f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeLgRegularIcon);
export default ForwardRef;

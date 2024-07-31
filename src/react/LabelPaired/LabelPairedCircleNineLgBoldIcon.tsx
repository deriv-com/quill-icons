import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineLgBoldIcon = (
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
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10-3.125c-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874a1.87 1.87 0 0 0 1.64.938c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.876-.352-.546-.938-.937-1.602-.937m-1.016 5.508A3.77 3.77 0 0 1 6.25 14.25a3.751 3.751 0 0 1 7.5 0c0 1.29-.586 2.5-1.523 3.32l-3.204 2.735a.974.974 0 0 1-1.328-.117.974.974 0 0 1 .117-1.329z' />
    </g>
    <defs>
      <clipPath id='2729f8c815931a66118ff55a7c20d956__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineLgBoldIcon);
export default ForwardRef;

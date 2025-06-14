import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarLgBoldIcon = (
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
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.781-4.766v.547c.39.04.781.156 1.133.274.078 0 .156.039.234.039.43.156.704.625.586 1.054-.117.47-.586.704-1.054.586-.04 0-.117-.039-.157-.039-.273-.078-.546-.156-.82-.195-.547-.117-1.133-.078-1.601.156-.43.156-.782.625-.313.938.39.234.86.351 1.29.508.116 0 .194.039.273.039.625.195 1.406.43 1.992.82.742.508 1.094 1.367.937 2.266-.156.859-.781 1.445-1.484 1.757a4.3 4.3 0 0 1-1.016.235v.586c0 .468-.351.86-.82.86a.867.867 0 0 1-.86-.86v-.664a39 39 0 0 1-1.68-.508.83.83 0 0 1-.507-1.055c.156-.469.625-.703 1.055-.547.117.04.195.078.312.117.43.118.86.274 1.328.352.664.117 1.211.04 1.563-.078.469-.195.664-.781.195-1.094-.39-.234-.86-.39-1.328-.508-.078-.039-.195-.039-.273-.078-.586-.156-1.328-.39-1.875-.742-.782-.469-1.133-1.29-.977-2.187.156-.86.82-1.407 1.524-1.72.195-.116.43-.155.664-.234v-.625c0-.468.39-.859.859-.859s.82.39.82.86' />
    </g>
    <defs>
      <clipPath id='9e9f6326b2e1c655e2a84486723c6829__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarLgBoldIcon);
export default ForwardRef;

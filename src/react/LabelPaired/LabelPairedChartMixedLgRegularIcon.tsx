import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedLgRegularIcon = (
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
      <path d='M19.844 6.945q.351.469-.04.899l-6.874 6.25q-.43.312-.86-.04L7.422 9.446.977 14.133q-.47.273-.86-.156-.273-.47.156-.86l6.875-5q.43-.273.782.078l4.61 4.57 6.405-5.859q.469-.351.899.04M3.125 22.375v-2.5q-.039-.585-.625-.625-.585.039-.625.625v2.5q.039.585.625.625.586-.039.625-.625M2.5 18q.781.039 1.328.547.508.546.547 1.328v2.5q-.039.78-.547 1.328-.546.508-1.328.547a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-2.5q.039-.78.547-1.328.546-.508 1.328-.547m5.625-1.875q-.039-.585-.625-.625-.585.039-.625.625v6.25q.039.585.625.625.585-.039.625-.625zm-2.5 0q.039-.78.547-1.328.546-.508 1.328-.547.781.039 1.328.547.508.546.547 1.328v6.25q-.039.78-.547 1.328-.546.508-1.328.547a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm7.5 6.25v-3.75q-.039-.585-.625-.625-.585.039-.625.625v3.75q.039.585.625.625.585-.039.625-.625M12.5 16.75q.78.039 1.328.547.508.546.547 1.328v3.75q-.039.78-.547 1.328-.546.508-1.328.547a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-3.75q.039-.78.547-1.328.546-.508 1.328-.547m5.625-.625q-.039-.585-.625-.625-.585.039-.625.625v6.25q.039.585.625.625.585-.039.625-.625zm-2.5 0q.039-.78.547-1.328.546-.508 1.328-.547.78.039 1.328.547.508.546.547 1.328v6.25q-.039.78-.547 1.328-.546.508-1.328.547a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
    </g>
    <defs>
      <clipPath id='f857119fc2287ae0__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedDealProtectionLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.203 10.266h3.945a5 5 0 0 1 1.875.351c.586.195 1.055.547 1.446.977.39.43.703.976.937 1.64.235.664.313 1.407.313 2.266 0 .898-.078 1.64-.313 2.305-.234.664-.547 1.21-.937 1.64-.39.43-.86.742-1.446.977-.546.234-1.21.351-1.875.351H3.203zm3.945 8.476c.665 0 1.211-.195 1.602-.586.39-.39.586-.976.586-1.836V14.72c0-.86-.195-1.446-.586-1.836-.39-.39-.937-.586-1.602-.586h-1.68v6.445zm6.485 1.992V10.266h4.96c.509 0 .938.117 1.329.273.39.156.703.39.976.664.274.313.508.664.665 1.094.117.39.195.86.195 1.328 0 .508-.04.977-.195 1.367-.157.43-.391.781-.665 1.055a3.681 3.681 0 0 1-.976.703c-.39.156-.82.234-1.328.234h-2.657v3.75zm2.305-5.742h2.382c.352 0 .625-.078.82-.273.196-.156.274-.43.274-.781v-.626c0-.351-.078-.624-.273-.78-.196-.196-.47-.274-.82-.274h-2.384z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionLgBoldIcon);
export default ForwardRef;

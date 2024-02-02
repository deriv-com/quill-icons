import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketLgRegularIcon = (
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
      <path d='m18.71 15.422-5.155-4.844q-.078-.078-.157-.078a.305.305 0 0 0-.273.273V13q-.039.585-.625.625H7.813q-.274.039-.313.313v3.124q.039.274.313.313H12.5q.585.039.625.625v2.227a.305.305 0 0 0 .273.273q.08 0 .157-.078l5.156-4.844q.039-.039.039-.078t-.04-.078M20 15.5q0 .585-.43.977l-5.156 4.882a1.46 1.46 0 0 1-1.016.391q-.664 0-1.093-.43-.43-.429-.43-1.093v-1.602H7.813q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-3.125q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469h4.063v-1.602q0-.664.43-1.093.429-.43 1.093-.43.587 0 1.016.43l5.156 4.843q.43.39.43.977M6.875 8h-3.75q-.781.039-1.328.547-.508.546-.547 1.328v11.25q.039.78.547 1.328.546.508 1.328.547h3.75q.585.039.625.625-.039.585-.625.625h-3.75q-1.328-.04-2.227-.898-.858-.9-.898-2.227V9.875q.04-1.328.898-2.227.9-.859 2.227-.898h3.75q.585.039.625.625-.039.585-.625.625' />
    </g>
    <defs>
      <clipPath id='cb31dec04fed90e5__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageLgBoldIcon = (
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
      <path d='M2.5 8h20q1.055.039 1.758.742T25 10.5v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-20q-1.055-.039-1.758-.742Q.04 21.554 0 20.5v-10q.039-1.055.742-1.758T2.5 8m20 1.875h-10v11.25h10q.585-.039.625-.625v-10q-.039-.585-.625-.625m-15.547 2.5q-.195-.43-.703-.469-.508.039-.703.469L3.047 18q-.234.664.39 1.016.665.234 1.016-.391l.352-.781h2.89l.352.781q.351.626 1.015.39.625-.35.391-1.015zm.04 3.906H5.507l.742-1.68zm10.82-4.375q.703.079.78.781v.157h2.345q.703.078.78.781-.077.704-.78.781h-.079l-.078.196a7.7 7.7 0 0 1-1.523 2.539l.039.039q.039 0 .039.039l.742.43q.585.429.274 1.054-.43.585-1.055.274l-.742-.43a3.5 3.5 0 0 1-.508-.352q-.626.469-1.328.782l-.157.039q-.663.234-1.015-.391-.234-.664.39-1.016l.157-.078q.35-.156.703-.39l-.469-.47q-.468-.546 0-1.093.548-.468 1.094 0l.586.586a6.1 6.1 0 0 0 1.172-1.758H15q-.704-.078-.781-.781.078-.704.781-.781h2.031v-.156q.078-.704.782-.782' />
    </g>
    <defs>
      <clipPath id='79921be74673534ca93c60028538900f__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageLgBoldIcon);
export default ForwardRef;

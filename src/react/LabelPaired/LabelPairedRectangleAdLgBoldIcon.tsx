import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdLgBoldIcon = (
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
      <path d='M2.75 8.625q-.586.039-.625.625v12.5q.039.585.625.625h17.5q.585-.039.625-.625V9.25q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T2.75 6.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75zm8.984 3.008 2.813 5.625q.273.82-.43 1.289-.82.273-1.25-.43l-.234-.43H6.617l-.234.43q-.43.704-1.25.39-.743-.429-.39-1.25l2.812-5.624q.273-.508.82-.508.585 0 .86.508m-.859 2.539-.82 1.64h1.64zm7.188.703q-.86.078-.938.938.078.858.938.937.858-.078.937-.937-.078-.86-.937-.938m.937-1.719v-1.094q.078-.858.938-.937.858.078.937.938v5.625q-.078.858-.937.937a.9.9 0 0 1-.665-.273 2.7 2.7 0 0 1-1.21.273q-1.212-.04-1.993-.82-.78-.781-.82-1.992.04-1.212.82-1.993.782-.78 1.992-.82.509 0 .938.156' />
    </g>
    <defs>
      <clipPath id='d27c88207f5795bc__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdLgBoldIcon);
export default ForwardRef;

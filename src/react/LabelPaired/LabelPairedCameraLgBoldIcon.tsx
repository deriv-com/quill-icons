import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraLgBoldIcon = (
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
      <path d='M7.773 6.75h4.454q.702 0 1.289.43.547.39.78 1.054l.352 1.016H17.5q1.055.039 1.758.742T20 11.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75v-10q.039-1.055.742-1.758T2.5 9.25h2.852l.351-1.016.899.313-.899-.313q.234-.664.781-1.054.586-.43 1.29-.43M7.5 8.86l-.547 1.64q-.274.585-.898.625H2.5q-.585.039-.625.625v10q.039.585.625.625h15q.585-.039.625-.625v-10q-.039-.585-.625-.625h-3.555q-.624-.039-.86-.625l-.546-1.64q-.117-.235-.312-.235H7.773q-.194 0-.273.234M10 21.124q-1.172 0-2.187-.586a4.3 4.3 0 0 1-1.602-1.602 4.3 4.3 0 0 1-.586-2.187q0-1.172.586-2.187.585-1.016 1.601-1.602A4.3 4.3 0 0 1 10 12.375q1.171 0 2.188.586 1.015.585 1.601 1.601t.586 2.188-.586 2.188a4.3 4.3 0 0 1-1.601 1.601 4.3 4.3 0 0 1-2.188.586M7.5 16.75q.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148' />
    </g>
    <defs>
      <clipPath id='3d6e72c7eeccff34d27783f618ed3d3a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraLgBoldIcon);
export default ForwardRef;

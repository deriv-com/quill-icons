import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionLgRegularIcon = (
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
      <path d='M7.93 16.75h5.82q.547 0 .898-.352.352-.35.352-.898V8q0-.547-.352-.898-.35-.352-.898-.352H2.5q-.547 0-.898.352-.352.35-.352.898v7.5q0 .547.352.898.35.352.898.352h1.25q.547 0 .898.352Q5 17.452 5 18v.625l2.188-1.64q.312-.235.742-.235M13.75 18H7.93l-3.164 2.383a.67.67 0 0 1-.664.039.55.55 0 0 1-.352-.547V18H2.5q-1.055-.039-1.758-.742Q.04 16.554 0 15.5V8q.039-1.055.742-1.758T2.5 5.5h11.25q1.055.039 1.758.742T16.25 8v7.5q-.039 1.055-.742 1.758T13.75 18m-1.25 5q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-1.25h1.25v1.25q0 .547.352.898.35.352.898.352h4.57q.43 0 .782.234L20 23.625V23q0-.547.352-.898.35-.352.898-.352h1.25q.547 0 .898-.352.352-.35.352-.898V13q0-.547-.352-.898-.35-.352-.898-.352h-5V10.5h5q1.055.039 1.758.742T25 13v7.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-1.25v1.875q0 .39-.352.547a.67.67 0 0 1-.664-.04L17.07 23zM7.188 8.234Q6.172 8.312 5.78 9.25v.04q-.156.546.352.78.585.156.82-.351v-.04q.078-.195.234-.195h1.641q.39.04.43.47a.4.4 0 0 1-.235.39l-1.21.703a.61.61 0 0 0-.313.547v.39q.039.547.625.625.585-.078.625-.625v-.039l.898-.508q.86-.507.86-1.484 0-.742-.469-1.21a1.9 1.9 0 0 0-1.21-.509zm.937 7.07q.508 0 .82-.429a.87.87 0 0 0 0-.937q-.312-.43-.82-.43t-.82.43a.87.87 0 0 0 0 .937q.312.43.82.43' />
    </g>
    <defs>
      <clipPath id='8aa395e198e1c2898ed4bca88fa5d2c3__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionLgRegularIcon);
export default ForwardRef;

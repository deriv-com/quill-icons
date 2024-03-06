import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintLgRegularIcon = (
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
      <path d='M1.25 15.5v1.875q-.039.585-.625.625-.585-.039-.625-.625V15.5q.04-2.812 1.367-5.04a9.9 9.9 0 0 1 3.594-3.593Q7.187 5.54 10 5.5q2.383.04 4.375 1.016t3.398 2.695q.314.468-.078.86-.508.351-.898-.079a8.7 8.7 0 0 0-2.969-2.344Q12.07 6.75 10 6.75q-2.46.04-4.414 1.21a8.2 8.2 0 0 0-3.125 3.126Q1.289 13.039 1.25 15.5m18.398-2.656Q20 14.094 20 15.5v1.875q-.039.547-.625.625-.585-.078-.625-.625V15.5q0-1.21-.312-2.344-.118-.547.43-.742.585-.117.78.43M10 8.625q2.93.079 4.844 2.031 1.953 1.914 2.031 4.844v.977q0 1.757-.234 3.476-.117.508-.586.547-.664-.078-.625-.742.195-1.641.195-3.281V15.5q-.078-2.383-1.64-3.984Q12.382 9.914 10 9.875q-1.054 0-1.953.352-.47.156-.781-.196-.39-.585.195-.937A7 7 0 0 1 10 8.625m-4.336 2.422q.312.43 0 .898-1.25 1.485-1.289 3.555v.977a15 15 0 0 1-.43 3.593.65.65 0 0 1-.586.43q-.703-.117-.625-.82.39-1.563.391-3.203V15.5q.04-2.618 1.64-4.453.47-.43.9 0M10 11.75q1.602.039 2.656 1.094 1.055 1.054 1.094 2.656v.977q0 2.422-.508 4.804-.117.43-.586.469-.663-.078-.625-.781.47-2.227.469-4.492V15.5q-.039-1.055-.742-1.758T10 13q-1.055.039-1.758.742T7.5 15.5v.977q0 2.46-.664 4.843a.65.65 0 0 1-.586.43q-.351 0-.508-.273a.59.59 0 0 1-.117-.547q.625-2.188.625-4.453V15.5q.038-1.602 1.094-2.656Q8.398 11.789 10 11.75m.625 3.75v.977q0 3.828-1.367 7.421l-.235.586q-.273.508-.82.352-.508-.273-.351-.82l.234-.586q1.29-3.36 1.289-6.953V15.5q.039-.585.625-.625.585.039.625.625' />
    </g>
    <defs>
      <clipPath id='447711fca3133ed7693d78f448809292__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintLgRegularIcon);
export default ForwardRef;
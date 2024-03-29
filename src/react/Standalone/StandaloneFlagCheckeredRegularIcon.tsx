import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFlagCheckeredRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M8.5 7.125v1.719l3.828-1.055a6.7 6.7 0 0 1 4.766.469c1.64.82 3.593.742 5.156-.156l.625-.352c.82-.469 1.875.117 1.875 1.094v11.015c0 .508-.312.938-.781 1.133l-1.172.508c-1.953.86-4.18.781-6.094-.156a5.95 5.95 0 0 0-4.258-.43L8.5 22.008v3.867a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625m0 3.008v2.422l3.75-.82V9.077zm0 3.71v2.774l3.75-.82v-2.774zm5-1.093v2.773a6.1 6.1 0 0 1 2.656.118l2.344.703V13.57c-.078 0-.156-.039-.195-.039l-2.54-.742a4.45 4.45 0 0 0-2.148-.078zm6.25 1.055v2.812c.586.04 1.172 0 1.758-.156l1.992-.43v-2.773l-1.719.39a7.1 7.1 0 0 1-2.031.157m-1.25 3.828c-.078 0-.156-.04-.195-.04l-2.54-.741a4.45 4.45 0 0 0-2.148-.079l-.117.04v2.656c1.29-.117 2.578.156 3.79.742.39.195.78.352 1.21.469zm1.25 3.203c.86.039 1.719-.117 2.54-.469l1.21-.508V17.32l-1.719.39c-.664.157-1.367.196-2.031.157zm0-8.32v.039c.586.039 1.172 0 1.758-.157l1.992-.43V8.845l-.625.351c-.977.547-2.07.86-3.125.86zm-1.25-2.54c-.703-.078-1.328-.312-1.953-.624a5.55 5.55 0 0 0-3.047-.508v2.617a5.9 5.9 0 0 1 2.617.117l2.383.703zm-10 7.93v2.813l3.633-1.016c.039 0 .078 0 .117-.039v-2.578z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFlagCheckeredRegularIcon);
export default ForwardRef;

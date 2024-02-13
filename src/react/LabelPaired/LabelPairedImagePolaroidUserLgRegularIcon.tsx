import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.375 20.5H1.5v1.25q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898V20.5zm-.078-1.25H16.5v-10q0-.547-.352-.898Q15.798 8 15.25 8H2.75q-.547 0-.898.352-.352.35-.352.898v10h3.203a3.18 3.18 0 0 1 1.055-1.797q.82-.664 1.992-.703h2.5q1.172.039 1.992.703a3.18 3.18 0 0 1 1.055 1.797m-7.305 0h6.016q-.47-1.172-1.758-1.25h-2.5q-1.29.078-1.758 1.25m11.758-10v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 22.804.25 21.75V9.25q.039-1.055.742-1.758T2.75 6.75h12.5q1.055.039 1.758.742t.742 1.758M10.25 13q0-.547-.352-.898-.35-.352-.898-.352-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898M9 10.5q1.407.04 2.148 1.25.705 1.25 0 2.5Q10.407 15.46 9 15.5q-1.406-.04-2.148-1.25-.705-1.25 0-2.5Q7.593 10.54 9 10.5' />
    </g>
    <defs>
      <clipPath id='7d4e6705b41484bdf0a14b3faf5cccc0__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserLgRegularIcon);
export default ForwardRef;

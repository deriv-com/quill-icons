import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.75v7.5q0 .328.21.54.212.21.54.21h4.734l-.187.75H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25v-7.5q.024-.632.445-1.055.422-.421 1.055-.445h5.766q.609 0 1.054.445l1.735 1.735q.445.445.445 1.078v1.148l-.75.75V7.508a.73.73 0 0 0-.21-.54L8.03 5.212a.64.64 0 0 0-.281-.164V7.25a.73.73 0 0 1-.21.54A.73.73 0 0 1 7 8H2.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54M2.5 5v2.25H7V5zm1.875 6q.024.633.563.984.563.282 1.125 0 .538-.351.562-.984a1.17 1.17 0 0 0-.562-.984 1.2 1.2 0 0 0-1.125 0q-.54.351-.563.984M5.5 12.875q-1.054-.024-1.617-.937-.516-.938 0-1.876.563-.913 1.617-.937 1.055.024 1.617.938.516.937 0 1.874-.562.915-1.617.938m6.914-3.187q-.28-.212-.539 0l-.586.585.938.938.585-.586q.212-.258 0-.516zM8.29 13.297a.3.3 0 0 0-.117.164l-.281 1.148 1.148-.28a.35.35 0 0 0 .164-.095l2.508-2.484-.938-.937zm3.07-4.125q.33-.352.774-.352.468 0 .797.352l.422.398q.327.352.328.797 0 .446-.328.797l-3.61 3.61q-.21.21-.515.28l-1.758.446a.36.36 0 0 1-.352-.094.41.41 0 0 1-.094-.375l.422-1.734q.094-.304.305-.54z' />
    </g>
    <defs>
      <clipPath id='7a26c40bf3bc607681bbfb5526d3ff47__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenCaptionRegularIcon);
export default ForwardRef;

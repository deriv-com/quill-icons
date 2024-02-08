import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.914 3.617 3.54 5.68a6.8 6.8 0 0 1 1.758-1.032A6.7 6.7 0 0 1 7.5 4.25q1.43.024 2.555.563t1.968 1.335q.82.774 1.36 1.594t.82 1.477a.87.87 0 0 1 0 .562q-.258.585-.726 1.313-.47.75-1.149 1.476l2.461 1.922q.375.352.094.797-.352.375-.797.094L.21 4.508q-.375-.352-.094-.797.352-.375.797-.094m3.54 2.766 1.077.844q.82-.704 1.969-.727 1.266.024 2.133.867.843.868.867 2.133 0 .75-.328 1.383l1.265.984a9 9 0 0 0 1.008-1.242q.422-.633.657-1.125-.258-.54-.704-1.219A8 8 0 0 0 11.25 6.97a5.8 5.8 0 0 0-1.664-1.125q-.937-.445-2.086-.469-1.78.046-3.047 1.008m4.804 3.773q.117-.305.117-.656-.023-.797-.54-1.336-.538-.515-1.335-.539h-.047Q7.5 7.813 7.5 8q0 .351-.164.656zm.21 3.07.985.774q-1.266.703-2.953.75-1.43-.024-2.555-.562A7.3 7.3 0 0 1 3 12.852a8.6 8.6 0 0 1-1.383-1.594q-.54-.821-.797-1.477a.7.7 0 0 1 0-.562q.33-.844 1.125-1.922l.89.68q-.63.843-.937 1.523.258.54.704 1.219.468.68 1.148 1.312.727.704 1.664 1.125.937.445 2.086.469a5.3 5.3 0 0 0 1.969-.398M4.5 9.5v-.187l1.313 1.03q.398.774 1.265.985l1.313 1.031a2.8 2.8 0 0 1-.891.141q-1.266-.024-2.133-.867-.843-.868-.867-2.133' />
    </g>
    <defs>
      <clipPath id='4db3bf94a65d9914845604f9d6788827__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashCaptionBoldIcon);
export default ForwardRef;

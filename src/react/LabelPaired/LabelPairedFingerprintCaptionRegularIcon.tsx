import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 9.5v1.125q-.023.352-.375.375-.352-.023-.375-.375V9.5q.024-1.688.82-3.023A5.94 5.94 0 0 1 2.977 4.32Q4.312 3.524 6 3.5a6.1 6.1 0 0 1 2.625.61 6 6 0 0 1 2.04 1.617q.186.28-.048.515-.305.21-.539-.047A5.2 5.2 0 0 0 8.297 4.79 5 5 0 0 0 6 4.25q-1.476.024-2.648.727a4.9 4.9 0 0 0-1.875 1.875Q.773 8.023.75 9.5m11.04-1.594q.21.75.21 1.594v1.125q-.023.328-.375.375-.352-.047-.375-.375V9.5q0-.726-.187-1.406-.07-.328.257-.446.351-.069.47.258M6 5.375q1.758.047 2.906 1.219 1.172 1.148 1.219 2.906v.586q0 1.054-.14 2.086-.071.304-.352.328-.398-.047-.375-.445a17 17 0 0 0 .117-1.97V9.5q-.047-1.43-.984-2.39Q7.43 6.147 6 6.124q-.632 0-1.172.21-.281.094-.469-.116-.234-.352.118-.563A4.2 4.2 0 0 1 6 5.375M3.398 6.828q.187.258 0 .54-.75.89-.773 2.132v.586q0 1.101-.258 2.156a.39.39 0 0 1-.351.258q-.423-.07-.375-.492a8 8 0 0 0 .234-1.922V9.5q.024-1.57.984-2.672.282-.258.54 0M6 7.25q.96.024 1.594.656.633.633.656 1.594v.586q0 1.453-.305 2.883-.07.258-.351.281-.398-.046-.375-.469.28-1.335.281-2.695V9.5a1.52 1.52 0 0 0-.445-1.055A1.52 1.52 0 0 0 6 8a1.52 1.52 0 0 0-1.055.445Q4.524 8.867 4.5 9.5v.586q0 1.476-.398 2.906a.39.39 0 0 1-.352.258q-.21 0-.305-.164a.35.35 0 0 1-.07-.328 9.7 9.7 0 0 0 .375-2.672V9.5q.024-.96.656-1.594Q5.04 7.274 6 7.25m.375 2.25v.586q0 2.297-.82 4.453l-.14.352q-.165.304-.493.21-.305-.163-.211-.492l.14-.351q.774-2.016.774-4.172V9.5q.023-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='454c35c31a5d300c7264b3ad0cd1fea4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintCaptionRegularIcon);
export default ForwardRef;
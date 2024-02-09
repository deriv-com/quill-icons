import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashCaptionRegularIcon = (
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
      <path d='m.61 3.57 14.25 11.274q.257.234.07.515-.258.258-.54.07L.14 4.18q-.257-.256-.07-.538.258-.235.54-.07m13.593 6.211q-.375.915-1.265 2.086l-.586-.445q.82-1.102 1.148-1.922-.234-.586-.727-1.336a10 10 0 0 0-1.265-1.476A6.9 6.9 0 0 0 9.75 5.492Q8.742 5.024 7.5 5q-1.405.024-2.508.61l-.633-.493q1.336-.82 3.141-.867 1.43.024 2.555.563t1.968 1.335q.82.774 1.36 1.594t.82 1.477a.87.87 0 0 1 0 .562M2.063 7.133l.609.469Q1.828 8.679 1.5 9.5q.234.586.727 1.336.515.75 1.265 1.476a6.9 6.9 0 0 0 1.758 1.196q1.008.468 2.25.492 1.406-.024 2.508-.61l.633.493q-1.337.82-3.141.867-1.43-.024-2.555-.562A7.3 7.3 0 0 1 3 12.852a8.6 8.6 0 0 1-1.383-1.594q-.54-.821-.797-1.477a.7.7 0 0 1 0-.562q.352-.915 1.243-2.086M7.5 12.5q-1.266-.024-2.133-.89-.843-.844-.867-2.11 0-.235.023-.445l.727.586q.07.89.703 1.5.633.585 1.547.609.188 0 .398-.023l.704.562q-.516.21-1.102.211m3-3q0 .235-.023.445L9.75 9.36a2.26 2.26 0 0 0-.703-1.5Q8.414 7.274 7.5 7.25q-.187 0-.375.047l-.727-.586Q6.914 6.5 7.5 6.5q1.266.024 2.133.867.843.868.867 2.133' />
    </g>
    <defs>
      <clipPath id='e43982c5e6f5501a0158931e3971616a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashCaptionRegularIcon);
export default ForwardRef;

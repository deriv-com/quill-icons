import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeCaptionRegularIcon = (
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
      <path d='M2.992 6.688a10 10 0 0 0-1.265 1.476Q1.235 8.914 1 9.5q.234.586.727 1.336.515.75 1.265 1.476a6.9 6.9 0 0 0 1.758 1.196Q5.758 13.976 7 14q1.242-.024 2.25-.492a6.9 6.9 0 0 0 1.758-1.195q.75-.727 1.265-1.477.492-.75.727-1.336-.234-.586-.727-1.336a10 10 0 0 0-1.265-1.476A6.9 6.9 0 0 0 9.25 5.492Q8.242 5.024 7 5q-1.242.024-2.25.492a6.9 6.9 0 0 0-1.758 1.196M7 4.25q1.43.024 2.555.563t1.968 1.335q.82.774 1.36 1.594t.82 1.477a.7.7 0 0 1 0 .562q-.28.657-.82 1.477a9 9 0 0 1-1.36 1.594 7.7 7.7 0 0 1-1.968 1.335q-1.125.54-2.555.563-1.43-.024-2.555-.562a7.7 7.7 0 0 1-1.968-1.336 9 9 0 0 1-1.36-1.594Q.577 10.437.32 9.78a.7.7 0 0 1 0-.562q.258-.657.797-1.477a9 9 0 0 1 1.36-1.594 7.7 7.7 0 0 1 1.968-1.335Q5.57 4.273 7 4.25M4.75 9.5q0 .609.305 1.125.304.516.82.82.54.305 1.125.305a2.26 2.26 0 0 0 1.945-1.125q.305-.516.305-1.125t-.305-1.125A2.255 2.255 0 0 0 7 7.25a2.26 2.26 0 0 0-1.945 1.125A2.17 2.17 0 0 0 4.75 9.5m5.25 0q0 .82-.398 1.5A3.1 3.1 0 0 1 8.5 12.102 3 3 0 0 1 7 12.5a3 3 0 0 1-1.5-.398A3.1 3.1 0 0 1 4.398 11 2.9 2.9 0 0 1 4 9.5q0-.82.398-1.5A3.1 3.1 0 0 1 5.5 6.898 3 3 0 0 1 7 6.5q.797 0 1.5.398A3.1 3.1 0 0 1 9.602 8Q10 8.68 10 9.5' />
    </g>
    <defs>
      <clipPath id='d8e70687273f871f8fbf487ba19b12c1__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeCaptionRegularIcon);
export default ForwardRef;

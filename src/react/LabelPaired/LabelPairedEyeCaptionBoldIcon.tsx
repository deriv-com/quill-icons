import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeCaptionBoldIcon = (
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
      <path d='M7 5.375q-1.148.024-2.086.469A5.8 5.8 0 0 0 3.25 6.969q-.68.633-1.148 1.312-.446.68-.704 1.219.258.54.704 1.219.468.68 1.148 1.312.727.704 1.664 1.125.937.445 2.086.469 1.148-.024 2.086-.469a5.8 5.8 0 0 0 1.664-1.125q.68-.633 1.148-1.312a11 11 0 0 0 .704-1.219q-.258-.54-.704-1.219A8 8 0 0 0 10.75 6.97a5.8 5.8 0 0 0-1.664-1.125Q8.149 5.399 7 5.375m-4.523.773a7.7 7.7 0 0 1 1.968-1.335Q5.57 4.273 7 4.25q1.43.024 2.555.563t1.968 1.335q.82.774 1.36 1.594t.82 1.477a.7.7 0 0 1 0 .562q-.28.657-.82 1.477a9 9 0 0 1-1.36 1.594 7.7 7.7 0 0 1-1.968 1.335q-1.125.54-2.555.563-1.43-.024-2.555-.562a7.7 7.7 0 0 1-1.968-1.336 9 9 0 0 1-1.36-1.594Q.577 10.437.32 9.78a.7.7 0 0 1 0-.562q.258-.657.797-1.477a9 9 0 0 1 1.36-1.594M7 11.375q.797-.023 1.336-.54.515-.538.539-1.335-.023-.797-.54-1.336Q7.798 7.65 7 7.625h-.047Q7 7.813 7 8a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445a1.5 1.5 0 0 1-.375-.047V9.5q.023.797.54 1.336.538.515 1.335.539M7 6.5q.82 0 1.5.398A3.1 3.1 0 0 1 9.602 8Q10 8.703 10 9.5T9.602 11A3.1 3.1 0 0 1 8.5 12.102 2.9 2.9 0 0 1 7 12.5a2.9 2.9 0 0 1-1.5-.398A3.1 3.1 0 0 1 4.398 11 3 3 0 0 1 4 9.5q0-.797.398-1.5A3.1 3.1 0 0 1 5.5 6.898 2.9 2.9 0 0 1 7 6.5' />
    </g>
    <defs>
      <clipPath id='2fd0d33c74582183aca74c202134c605__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeCaptionBoldIcon);
export default ForwardRef;

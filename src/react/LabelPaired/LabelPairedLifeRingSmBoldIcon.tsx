import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.527 15.207 8.34 13.02a2.6 2.6 0 0 1-1.34.355q-.738 0-1.34-.355l-2.187 2.187Q4.949 16.41 7 16.437q2.05-.027 3.527-1.23m1.86 0 .328.328q.383.465 0 .93-.465.382-.93 0l-.328-.328Q9.597 17.695 7 17.75q-2.597-.055-4.457-1.613l-.328.328q-.465.382-.93 0-.383-.465 0-.93l.328-.328Q.054 13.347 0 10.75q.054-2.597 1.613-4.457l-.328-.328q-.383-.465 0-.93.465-.382.93 0l.328.328Q4.403 3.804 7 3.75q2.598.054 4.457 1.613l.328-.328q.465-.382.93 0 .383.465 0 .93l-.328.328Q13.945 8.153 14 10.75q-.055 2.598-1.613 4.457m-.93-.93q1.203-1.476 1.23-3.527-.027-2.05-1.23-3.527L9.27 9.41q.355.602.355 1.34t-.355 1.34zm-.93-7.984Q9.051 5.09 7 5.063q-2.05.027-3.527 1.23L5.66 8.48A2.6 2.6 0 0 1 7 8.125q.738 0 1.34.355zM4.73 12.09a2.6 2.6 0 0 1-.355-1.34q0-.738.355-1.34L2.543 7.223Q1.34 8.699 1.313 10.75q.027 2.05 1.23 3.527zm.957-1.34q.028.738.657 1.148.656.33 1.312 0 .63-.41.657-1.148-.028-.738-.657-1.148a1.4 1.4 0 0 0-1.312 0q-.63.41-.657 1.148' />
    </g>
    <defs>
      <clipPath id='56761167dc3488f15ee243997a9f2db7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingSmBoldIcon);
export default ForwardRef;

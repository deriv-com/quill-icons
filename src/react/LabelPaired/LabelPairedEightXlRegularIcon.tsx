import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 13.125q0 1.454-.656 2.672a5.8 5.8 0 0 1-1.828 1.969 5.75 5.75 0 0 1 2.343 2.062q.891 1.36.891 3.047-.047 2.391-1.64 3.984-1.594 1.594-3.985 1.641h-3.75q-2.391-.047-3.984-1.64Q.047 25.265 0 22.874q0-1.687.89-3.047a5.75 5.75 0 0 1 2.344-2.062 5.8 5.8 0 0 1-1.828-1.97 5.55 5.55 0 0 1-.656-2.671q.047-2.391 1.64-3.984Q3.985 7.547 6.376 7.5h2.25q2.391.047 3.984 1.64 1.595 1.594 1.641 3.985M8.625 18.75h-3q-1.734.047-2.906 1.219T1.5 22.875q.047 1.734 1.219 2.906T5.625 27h3.75q1.734-.046 2.906-1.219 1.172-1.172 1.219-2.906-.046-1.734-1.219-2.906-1.172-1.173-2.906-1.219zm0-1.5q1.734-.046 2.906-1.219 1.172-1.172 1.219-2.906-.046-1.734-1.219-2.906Q10.36 9.047 8.625 9h-2.25q-1.734.047-2.906 1.219T2.25 13.125q.047 1.734 1.219 2.906t2.906 1.219z' />
    </g>
    <defs>
      <clipPath id='1783387c376eb475__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightXlRegularIcon);
export default ForwardRef;

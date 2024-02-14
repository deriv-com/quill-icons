import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 7.5q-2.859.047-5.25 1.406-2.39 1.407-3.844 3.844Q1.5 15.234 1.5 18t1.406 5.25q1.453 2.437 3.844 3.844Q9.141 28.454 12 28.5q2.859-.047 5.25-1.406 2.39-1.407 3.844-3.844Q22.5 20.766 22.5 18t-1.406-5.25q-1.453-2.437-3.844-3.844Q14.859 7.546 12 7.5M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m-1.828-15.844-.656.656q-.563.423-1.078-.046-.422-.563.046-1.078l.657-.61A3.95 3.95 0 0 1 11.906 12q1.64.094 2.719 1.172 1.078 1.125 1.125 2.765 0 1.594-1.125 2.766L10.828 22.5h4.922q.704.046.75.75-.046.704-.75.75H9a.86.86 0 0 1-.703-.469q-.14-.468.187-.797l5.063-5.062q.703-.75.703-1.735-.047-1.031-.703-1.687-.656-.703-1.688-.75-.984 0-1.687.656' />
    </g>
    <defs>
      <clipPath id='532b20852129e02a44d612f9d2cefdf9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoXlRegularIcon);
export default ForwardRef;

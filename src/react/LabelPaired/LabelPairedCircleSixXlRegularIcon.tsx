import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixXlRegularIcon = (
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
      <path d='M12 7.5q-2.859.047-5.25 1.406-2.39 1.407-3.844 3.844Q1.5 15.234 1.5 18t1.406 5.25q1.453 2.437 3.844 3.844Q9.141 28.454 12 28.5q2.859-.047 5.25-1.406 2.39-1.407 3.844-3.844Q22.5 20.766 22.5 18t-1.406-5.25q-1.453-2.437-3.844-3.844Q14.859 7.546 12 7.5M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m2.063-17.766q.42.563-.047 1.079L12.188 15q1.827.094 3.046 1.36 1.22 1.265 1.266 3.14-.047 1.922-1.312 3.188Q13.922 23.952 12 24q-1.922-.047-3.187-1.312Q7.547 21.422 7.5 19.5q.047-2.203 1.594-3.703l3.89-3.61q.563-.42 1.079.047M12 16.5q-1.687.046-2.578 1.5-.845 1.5 0 3 .89 1.454 2.578 1.5 1.687-.046 2.578-1.5.845-1.5 0-3-.89-1.454-2.578-1.5' />
    </g>
    <defs>
      <clipPath id='aa0d8d01765a4a10114df778307a8d21__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixXlRegularIcon);
export default ForwardRef;

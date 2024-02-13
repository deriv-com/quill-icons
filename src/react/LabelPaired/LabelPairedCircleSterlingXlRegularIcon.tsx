import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingXlRegularIcon = (
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
      <path d='M22.5 18q-.047-2.859-1.406-5.25-1.407-2.39-3.844-3.844Q14.766 7.5 12 7.5T6.75 8.906Q4.313 10.36 2.906 12.75 1.546 15.141 1.5 18q.047 2.859 1.406 5.25 1.407 2.39 3.844 3.844Q9.234 28.5 12 28.5t5.25-1.406q2.437-1.453 3.844-3.844 1.36-2.391 1.406-5.25M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12.188-5.25q-.75 0-1.22.516-.468.468-.515 1.218L10.5 16.5h2.25q.703.046.75.75-.047.704-.75.75H10.5a7.2 7.2 0 0 1-.844 3h5.719q.703.046.75.75-.047.704-.75.75H8.25q-.422 0-.656-.375a.8.8 0 0 1 .047-.797l.422-.61Q8.906 19.454 9 18h-.75q-.703-.046-.75-.75.046-.704.75-.75H9l-.047-2.016q.047-1.359.938-2.296.89-.891 2.297-.938.75 0 1.406.328l.984.516q.61.375.328.984-.328.61-.984.328l-.985-.469q-.375-.187-.75-.187' />
    </g>
    <defs>
      <clipPath id='f335eda5d978c15ab72bf3a129ab8e09__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingXlRegularIcon);
export default ForwardRef;

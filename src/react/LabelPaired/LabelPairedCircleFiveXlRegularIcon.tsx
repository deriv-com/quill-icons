import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveXlRegularIcon = (
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
      <path d='M12 7.5q-2.859.047-5.25 1.406-2.39 1.407-3.844 3.844Q1.5 15.234 1.5 18t1.406 5.25q1.453 2.437 3.844 3.844Q9.141 28.454 12 28.5q2.859-.047 5.25-1.406 2.39-1.407 3.844-3.844Q22.5 20.766 22.5 18t-1.406-5.25q-1.453-2.437-3.844-3.844Q14.859 7.546 12 7.5M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30M9.75 12H15q.703.047.75.75-.047.703-.75.75h-4.64l-.797 3.094 3.75.375q1.406.188 2.296 1.125.845.984.891 2.39-.047 1.5-1.031 2.485-.985.984-2.485 1.031h-2.062q-2.062-.047-3.235-1.687l-.046-.141q-.33-.61.187-1.031.61-.33 1.031.187l.094.14q.703.985 1.969 1.032h2.062q.845 0 1.407-.61.609-.561.609-1.406a1.94 1.94 0 0 0-.516-1.359 2.04 2.04 0 0 0-1.312-.656L8.532 18a.72.72 0 0 1-.516-.328.7.7 0 0 1-.094-.61l1.125-4.5q.14-.514.703-.562' />
    </g>
    <defs>
      <clipPath id='7a05c146166f7ab52080ba2e23990d8a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveXlRegularIcon);
export default ForwardRef;

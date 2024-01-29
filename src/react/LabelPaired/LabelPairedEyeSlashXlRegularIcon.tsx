import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.219 6.14 28.5 22.548q.515.468.14 1.03-.515.517-1.078.141L.281 7.36q-.515-.515-.14-1.078.515-.469 1.078-.14m27.187 12.423q-.75 1.828-2.531 4.171l-1.172-.89Q26.344 19.64 27 18q-.469-1.172-1.453-2.672-1.032-1.5-2.531-2.953a13.7 13.7 0 0 0-3.516-2.39Q17.484 9.045 15 9q-2.813.047-5.016 1.219L8.72 9.234Q11.39 7.594 15 7.5q2.86.046 5.11 1.125t3.937 2.672q1.64 1.547 2.719 3.187 1.077 1.641 1.64 2.954.188.563 0 1.125M4.125 13.266l1.219.937Q3.656 16.36 3 18q.47 1.172 1.453 2.672 1.031 1.5 2.531 2.953a13.7 13.7 0 0 0 3.516 2.39q2.016.939 4.5.985 2.813-.046 5.016-1.219l1.265.985Q18.61 28.406 15 28.5q-2.86-.046-5.11-1.125T6 24.703q-1.687-1.547-2.766-3.187t-1.593-2.953a1.4 1.4 0 0 1 0-1.125q.703-1.83 2.484-4.172M15 24q-2.531-.047-4.266-1.781Q9.047 20.53 9 18q0-.469.047-.89L10.5 18.28q.141 1.782 1.406 3Q13.172 22.454 15 22.5q.375 0 .797-.047l1.406 1.125A5.8 5.8 0 0 1 15 24m6-6q0 .47-.047.89L19.5 17.72q-.14-1.782-1.406-3Q16.828 13.547 15 13.5q-.375 0-.75.094l-1.453-1.172A5.8 5.8 0 0 1 15 12q2.532.047 4.266 1.734Q20.954 15.47 21 18' />
    </g>
    <defs>
      <clipPath id='f9e21eb131625c3b19dc0d9a3aaf3138__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashXlBoldIcon = (
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
      <path d='m1.828 6.234 5.25 4.125a13.5 13.5 0 0 1 3.516-2.062Q12.609 7.547 15 7.5q2.86.046 5.11 1.125t3.937 2.672q1.64 1.547 2.719 3.187 1.077 1.641 1.64 2.954.188.563 0 1.125-.515 1.17-1.453 2.625-.937 1.5-2.297 2.953l4.922 3.843q.75.704.188 1.594-.704.75-1.594.188L.422 8.016q-.75-.704-.188-1.594.704-.75 1.594-.188m7.078 5.532 2.156 1.687Q12.704 12.047 15 12q2.532.047 4.266 1.734Q20.954 15.47 21 18q0 1.5-.656 2.766l2.531 1.968a18 18 0 0 0 2.016-2.484q.843-1.266 1.312-2.25-.516-1.078-1.406-2.437a16 16 0 0 0-2.297-2.626 11.6 11.6 0 0 0-3.328-2.25Q17.297 9.798 15 9.75q-3.562.094-6.094 2.016m9.61 7.547q.234-.61.234-1.313-.046-1.593-1.078-2.672Q16.593 14.297 15 14.25h-.094q.094.375.094.75 0 .703-.328 1.313zm.422 6.14L20.906 27q-2.53 1.407-5.906 1.5-2.86-.046-5.11-1.125T6 24.703q-1.687-1.547-2.766-3.187t-1.593-2.953a1.4 1.4 0 0 1 0-1.125q.656-1.688 2.25-3.844l1.78 1.36Q4.407 16.64 3.798 18q.516 1.078 1.406 2.438A16 16 0 0 0 7.5 23.063a11.6 11.6 0 0 0 3.328 2.25q1.875.89 4.172.937 2.156-.047 3.938-.797M9 18v-.375l2.625 2.063q.797 1.546 2.531 1.968l2.625 2.063A5.6 5.6 0 0 1 15 24q-2.531-.047-4.266-1.734Q9.047 20.53 9 18' />
    </g>
    <defs>
      <clipPath id='9f49bcdad8f191da__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashXlBoldIcon);
export default ForwardRef;

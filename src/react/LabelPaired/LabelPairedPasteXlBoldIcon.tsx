import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteXlBoldIcon = (
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
      <path d='M3.75 10.5H3q-.703.047-.75.75V24q.046.704.75.75h4.5V27H3q-1.266-.047-2.11-.89Q.048 25.265 0 24V11.25q.047-1.266.89-2.11.844-.843 2.11-.89h1.922q.14-.984.844-1.594Q6.469 6 7.5 6t1.734.656q.704.61.844 1.594H12q1.078 0 1.875.656.75.61 1.031 1.594H12a4.43 4.43 0 0 0-2.297.61 4.7 4.7 0 0 0-1.594 1.64H5.25q-.656 0-1.078-.422-.422-.421-.422-1.078zm3-1.875q.046.703.75.75.703-.047.75-.75-.047-.703-.75-.75-.703.047-.75.75M12 27.75h9q.704-.046.75-.75v-9H19.5q-.656 0-1.078-.422Q18 17.157 18 16.5v-2.25h-6q-.703.047-.75.75v12q.047.704.75.75M21 30h-9q-1.266-.047-2.11-.89Q9.048 28.265 9 27V15q.047-1.266.89-2.11.844-.843 2.11-.89h7.313a2.17 2.17 0 0 1 1.593.656l2.438 2.438q.656.656.656 1.594V27q-.047 1.266-.89 2.11-.844.843-2.11.89' />
    </g>
    <defs>
      <clipPath id='a466d4f25fe56e84fa51e5f792750a27__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteXlBoldIcon);
export default ForwardRef;

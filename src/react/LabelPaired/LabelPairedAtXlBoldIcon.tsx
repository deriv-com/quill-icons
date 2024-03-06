import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtXlBoldIcon = (
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
      <path d='M12 8.25q-4.125.094-6.89 2.86Q2.342 13.874 2.25 18q.094 4.125 2.86 6.89 2.765 2.766 6.89 2.86 1.032.094 1.125 1.125Q13.032 29.907 12 30q-3.375-.047-6.047-1.64a11.9 11.9 0 0 1-4.312-4.313Q.047 21.375 0 18q.047-3.375 1.64-6.047a11.9 11.9 0 0 1 4.313-4.312Q8.625 6.047 12 6q3.375.047 6.047 1.64a11.9 11.9 0 0 1 4.312 4.313Q23.953 14.625 24 18v1.313q-.046 1.828-1.266 3.046-1.218 1.22-3.047 1.266-2.296-.094-3.515-1.828Q14.53 23.53 12 23.625q-2.391-.047-3.984-1.64Q6.422 20.39 6.375 18q.047-2.391 1.64-3.984Q9.61 12.422 12 12.375q2.063.046 3.563 1.266.327-.47.937-.516 1.032.095 1.125 1.125v5.063q0 .89.61 1.453.562.609 1.453.609.89 0 1.453-.61.609-.562.609-1.453V18q-.093-4.125-2.86-6.89Q16.126 8.343 12 8.25M15.375 18q-.047-1.922-1.687-2.906-1.688-.938-3.376 0-1.64.984-1.687 2.906.047 1.922 1.688 2.906 1.687.938 3.374 0 1.641-.984 1.688-2.906' />
    </g>
    <defs>
      <clipPath id='bdf60407d5d1cee768afc15503c598f9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtXlBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsXlBoldIcon = (
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
      <path d='M12 6q1.032.095 1.125 1.125v1.969q3.094.422 5.25 2.531 2.11 2.157 2.578 5.25h1.922Q23.907 16.969 24 18q-.093 1.032-1.125 1.125h-1.922q-.468 3.094-2.578 5.25-2.156 2.11-5.25 2.578v1.922Q13.032 29.907 12 30q-1.03-.093-1.125-1.125v-1.922q-3.093-.468-5.25-2.578-2.11-2.156-2.531-5.25H1.125Q.095 19.032 0 18q.095-1.03 1.125-1.125h1.969q.422-3.093 2.531-5.25 2.157-2.11 5.25-2.531V7.125Q10.97 6.095 12 6M5.25 18q0 1.829.89 3.375a6.77 6.77 0 0 0 2.485 2.484A6.8 6.8 0 0 0 12 24.75a6.8 6.8 0 0 0 3.375-.89 6.77 6.77 0 0 0 2.484-2.485A6.65 6.65 0 0 0 18.75 18a6.65 6.65 0 0 0-.89-3.375 6.77 6.77 0 0 0-2.485-2.484A6.8 6.8 0 0 0 12 11.25a6.8 6.8 0 0 0-3.375.89 6.77 6.77 0 0 0-2.484 2.485A6.65 6.65 0 0 0 5.25 18m9 0q-.047-1.266-1.125-1.969-1.125-.562-2.25 0Q9.797 16.734 9.75 18q.047 1.266 1.125 1.969 1.125.563 2.25 0 1.078-.703 1.125-1.969M7.5 18q0-1.218.61-2.25A4.51 4.51 0 0 1 12 13.5a4.51 4.51 0 0 1 3.89 2.25q.61 1.032.61 2.25 0 1.22-.61 2.25A4.51 4.51 0 0 1 12 22.5a4.51 4.51 0 0 1-3.89-2.25A4.34 4.34 0 0 1 7.5 18' />
    </g>
    <defs>
      <clipPath id='b343540ea1c73bef3f25de50f148de9c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsXlBoldIcon);
export default ForwardRef;
